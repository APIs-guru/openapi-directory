import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GitLabConfig } from "./gitlabconfig";
import { PullRequestFilter } from "./pullrequestfilter";
import { PushFilter } from "./pushfilter";
import { GitLabConfigInput } from "./gitlabconfig";



// GitLabEventsConfig
/** 
 * GitLabEventsConfig describes the configuration of a trigger that creates a build whenever a GitLab event is received.
**/
export class GitLabEventsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gitlabConfig" })
  gitlabConfig?: GitLabConfig;

  @SpeakeasyMetadata({ data: "json, name=gitlabConfigResource" })
  gitlabConfigResource?: string;

  @SpeakeasyMetadata({ data: "json, name=projectNamespace" })
  projectNamespace?: string;

  @SpeakeasyMetadata({ data: "json, name=pullRequest" })
  pullRequest?: PullRequestFilter;

  @SpeakeasyMetadata({ data: "json, name=push" })
  push?: PushFilter;
}


// GitLabEventsConfigInput
/** 
 * GitLabEventsConfig describes the configuration of a trigger that creates a build whenever a GitLab event is received.
**/
export class GitLabEventsConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gitlabConfig" })
  gitlabConfig?: GitLabConfigInput;

  @SpeakeasyMetadata({ data: "json, name=gitlabConfigResource" })
  gitlabConfigResource?: string;

  @SpeakeasyMetadata({ data: "json, name=projectNamespace" })
  projectNamespace?: string;

  @SpeakeasyMetadata({ data: "json, name=pullRequest" })
  pullRequest?: PullRequestFilter;

  @SpeakeasyMetadata({ data: "json, name=push" })
  push?: PushFilter;
}
