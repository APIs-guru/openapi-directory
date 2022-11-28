import { SpeakeasyBase } from "../../../internal/utils";
import { PullRequestFilter } from "./pullrequestfilter";
import { PushFilter } from "./pushfilter";
export declare enum RepositoryEventConfigRepositoryTypeEnum {
    RepositoryTypeUnspecified = "REPOSITORY_TYPE_UNSPECIFIED",
    Github = "GITHUB",
    GithubEnterprise = "GITHUB_ENTERPRISE",
    GitlabEnterprise = "GITLAB_ENTERPRISE"
}
/**
 * The configuration of a trigger that creates a build whenever an event from Repo API is received.
**/
export declare class RepositoryEventConfig extends SpeakeasyBase {
    pullRequest?: PullRequestFilter;
    push?: PushFilter;
    repository?: string;
    repositoryType?: RepositoryEventConfigRepositoryTypeEnum;
}
/**
 * The configuration of a trigger that creates a build whenever an event from Repo API is received.
**/
export declare class RepositoryEventConfigInput extends SpeakeasyBase {
    pullRequest?: PullRequestFilter;
    push?: PushFilter;
    repository?: string;
}
