import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BitbucketServerConfig } from "./bitbucketserverconfig";
import { PullRequestFilter } from "./pullrequestfilter";
import { PushFilter } from "./pushfilter";


// BitbucketServerTriggerConfig
/** 
 * BitbucketServerTriggerConfig describes the configuration of a trigger that creates a build whenever a Bitbucket Server event is received.
**/
export class BitbucketServerTriggerConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=bitbucketServerConfig" })
  bitbucketServerConfig?: BitbucketServerConfig;

  @Metadata({ data: "json, name=bitbucketServerConfigResource" })
  bitbucketServerConfigResource?: string;

  @Metadata({ data: "json, name=projectKey" })
  projectKey?: string;

  @Metadata({ data: "json, name=pullRequest" })
  pullRequest?: PullRequestFilter;

  @Metadata({ data: "json, name=push" })
  push?: PushFilter;

  @Metadata({ data: "json, name=repoSlug" })
  repoSlug?: string;
}
