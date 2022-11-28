import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BitbucketServerConfig } from "./bitbucketserverconfig";
import { PullRequestFilter } from "./pullrequestfilter";
import { PushFilter } from "./pushfilter";
import { BitbucketServerConfigInput } from "./bitbucketserverconfig";



// BitbucketServerTriggerConfig
/** 
 * BitbucketServerTriggerConfig describes the configuration of a trigger that creates a build whenever a Bitbucket Server event is received.
**/
export class BitbucketServerTriggerConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bitbucketServerConfig" })
  bitbucketServerConfig?: BitbucketServerConfig;

  @SpeakeasyMetadata({ data: "json, name=bitbucketServerConfigResource" })
  bitbucketServerConfigResource?: string;

  @SpeakeasyMetadata({ data: "json, name=projectKey" })
  projectKey?: string;

  @SpeakeasyMetadata({ data: "json, name=pullRequest" })
  pullRequest?: PullRequestFilter;

  @SpeakeasyMetadata({ data: "json, name=push" })
  push?: PushFilter;

  @SpeakeasyMetadata({ data: "json, name=repoSlug" })
  repoSlug?: string;
}


// BitbucketServerTriggerConfigInput
/** 
 * BitbucketServerTriggerConfig describes the configuration of a trigger that creates a build whenever a Bitbucket Server event is received.
**/
export class BitbucketServerTriggerConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bitbucketServerConfig" })
  bitbucketServerConfig?: BitbucketServerConfigInput;

  @SpeakeasyMetadata({ data: "json, name=bitbucketServerConfigResource" })
  bitbucketServerConfigResource?: string;

  @SpeakeasyMetadata({ data: "json, name=projectKey" })
  projectKey?: string;

  @SpeakeasyMetadata({ data: "json, name=pullRequest" })
  pullRequest?: PullRequestFilter;

  @SpeakeasyMetadata({ data: "json, name=push" })
  push?: PushFilter;

  @SpeakeasyMetadata({ data: "json, name=repoSlug" })
  repoSlug?: string;
}
