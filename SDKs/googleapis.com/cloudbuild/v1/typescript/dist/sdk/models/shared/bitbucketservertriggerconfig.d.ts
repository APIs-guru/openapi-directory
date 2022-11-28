import { SpeakeasyBase } from "../../../internal/utils";
import { BitbucketServerConfig } from "./bitbucketserverconfig";
import { PullRequestFilter } from "./pullrequestfilter";
import { PushFilter } from "./pushfilter";
import { BitbucketServerConfigInput } from "./bitbucketserverconfig";
/**
 * BitbucketServerTriggerConfig describes the configuration of a trigger that creates a build whenever a Bitbucket Server event is received.
**/
export declare class BitbucketServerTriggerConfig extends SpeakeasyBase {
    bitbucketServerConfig?: BitbucketServerConfig;
    bitbucketServerConfigResource?: string;
    projectKey?: string;
    pullRequest?: PullRequestFilter;
    push?: PushFilter;
    repoSlug?: string;
}
/**
 * BitbucketServerTriggerConfig describes the configuration of a trigger that creates a build whenever a Bitbucket Server event is received.
**/
export declare class BitbucketServerTriggerConfigInput extends SpeakeasyBase {
    bitbucketServerConfig?: BitbucketServerConfigInput;
    bitbucketServerConfigResource?: string;
    projectKey?: string;
    pullRequest?: PullRequestFilter;
    push?: PushFilter;
    repoSlug?: string;
}
