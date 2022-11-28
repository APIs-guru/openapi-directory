import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PullRequestFilterCommentControlEnum {
    CommentsDisabled = "COMMENTS_DISABLED",
    CommentsEnabled = "COMMENTS_ENABLED",
    CommentsEnabledForExternalContributorsOnly = "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"
}
/**
 * PullRequestFilter contains filter properties for matching GitHub Pull Requests.
**/
export declare class PullRequestFilter extends SpeakeasyBase {
    branch?: string;
    commentControl?: PullRequestFilterCommentControlEnum;
    invertRegex?: boolean;
}
