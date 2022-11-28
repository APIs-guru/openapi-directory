import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PullRequestFilter } from "./pullrequestfilter";
import { PushFilter } from "./pushfilter";


export enum RepositoryEventConfigRepositoryTypeEnum {
    RepositoryTypeUnspecified = "REPOSITORY_TYPE_UNSPECIFIED",
    Github = "GITHUB",
    GithubEnterprise = "GITHUB_ENTERPRISE",
    GitlabEnterprise = "GITLAB_ENTERPRISE"
}


// RepositoryEventConfig
/** 
 * The configuration of a trigger that creates a build whenever an event from Repo API is received.
**/
export class RepositoryEventConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pullRequest" })
  pullRequest?: PullRequestFilter;

  @SpeakeasyMetadata({ data: "json, name=push" })
  push?: PushFilter;

  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryType" })
  repositoryType?: RepositoryEventConfigRepositoryTypeEnum;
}


// RepositoryEventConfigInput
/** 
 * The configuration of a trigger that creates a build whenever an event from Repo API is received.
**/
export class RepositoryEventConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pullRequest" })
  pullRequest?: PullRequestFilter;

  @SpeakeasyMetadata({ data: "json, name=push" })
  push?: PushFilter;

  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository?: string;
}
