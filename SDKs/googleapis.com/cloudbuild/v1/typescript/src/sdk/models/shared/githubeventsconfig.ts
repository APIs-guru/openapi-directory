import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PullRequestFilter } from "./pullrequestfilter";
import { PushFilter } from "./pushfilter";



// GitHubEventsConfig
/** 
 * GitHubEventsConfig describes the configuration of a trigger that creates a build whenever a GitHub event is received.
**/
export class GitHubEventsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enterpriseConfigResourceName" })
  enterpriseConfigResourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=installationId" })
  installationId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=pullRequest" })
  pullRequest?: PullRequestFilter;

  @SpeakeasyMetadata({ data: "json, name=push" })
  push?: PushFilter;
}
