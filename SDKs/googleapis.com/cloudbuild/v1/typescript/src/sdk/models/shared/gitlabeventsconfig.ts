import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GitLabConfig } from "./gitlabconfig";
import { PullRequestFilter } from "./pullrequestfilter";
import { PushFilter } from "./pushfilter";


// GitLabEventsConfig
/** 
 * GitLabEventsConfig describes the configuration of a trigger that creates a build whenever a GitLab event is received.
**/
export class GitLabEventsConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gitlabConfig" })
  gitlabConfig?: GitLabConfig;

  @Metadata({ data: "json, name=gitlabConfigResource" })
  gitlabConfigResource?: string;

  @Metadata({ data: "json, name=projectNamespace" })
  projectNamespace?: string;

  @Metadata({ data: "json, name=pullRequest" })
  pullRequest?: PullRequestFilter;

  @Metadata({ data: "json, name=push" })
  push?: PushFilter;
}
