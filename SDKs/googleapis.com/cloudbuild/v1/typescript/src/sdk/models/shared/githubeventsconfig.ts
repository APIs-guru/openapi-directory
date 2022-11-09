import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PullRequestFilter } from "./pullrequestfilter";
import { PushFilter } from "./pushfilter";


// GitHubEventsConfig
/** 
 * GitHubEventsConfig describes the configuration of a trigger that creates a build whenever a GitHub event is received.
**/
export class GitHubEventsConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enterpriseConfigResourceName" })
  enterpriseConfigResourceName?: string;

  @Metadata({ data: "json, name=installationId" })
  installationId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: string;

  @Metadata({ data: "json, name=pullRequest" })
  pullRequest?: PullRequestFilter;

  @Metadata({ data: "json, name=push" })
  push?: PushFilter;
}
