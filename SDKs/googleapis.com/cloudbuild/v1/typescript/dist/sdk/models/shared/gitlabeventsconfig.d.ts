import { SpeakeasyBase } from "../../../internal/utils";
import { GitLabConfig } from "./gitlabconfig";
import { PullRequestFilter } from "./pullrequestfilter";
import { PushFilter } from "./pushfilter";
import { GitLabConfigInput } from "./gitlabconfig";
/**
 * GitLabEventsConfig describes the configuration of a trigger that creates a build whenever a GitLab event is received.
**/
export declare class GitLabEventsConfig extends SpeakeasyBase {
    gitlabConfig?: GitLabConfig;
    gitlabConfigResource?: string;
    projectNamespace?: string;
    pullRequest?: PullRequestFilter;
    push?: PushFilter;
}
/**
 * GitLabEventsConfig describes the configuration of a trigger that creates a build whenever a GitLab event is received.
**/
export declare class GitLabEventsConfigInput extends SpeakeasyBase {
    gitlabConfig?: GitLabConfigInput;
    gitlabConfigResource?: string;
    projectNamespace?: string;
    pullRequest?: PullRequestFilter;
    push?: PushFilter;
}
