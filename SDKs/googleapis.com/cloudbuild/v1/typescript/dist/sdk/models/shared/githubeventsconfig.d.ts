import { SpeakeasyBase } from "../../../internal/utils";
import { PullRequestFilter } from "./pullrequestfilter";
import { PushFilter } from "./pushfilter";
/**
 * GitHubEventsConfig describes the configuration of a trigger that creates a build whenever a GitHub event is received.
**/
export declare class GitHubEventsConfig extends SpeakeasyBase {
    enterpriseConfigResourceName?: string;
    installationId?: string;
    name?: string;
    owner?: string;
    pullRequest?: PullRequestFilter;
    push?: PushFilter;
}
