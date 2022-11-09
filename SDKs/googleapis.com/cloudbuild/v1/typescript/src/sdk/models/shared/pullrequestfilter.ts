import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PullRequestFilterCommentControlEnum {
    CommentsDisabled = "COMMENTS_DISABLED"
,    CommentsEnabled = "COMMENTS_ENABLED"
,    CommentsEnabledForExternalContributorsOnly = "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"
}


// PullRequestFilter
/** 
 * PullRequestFilter contains filter properties for matching GitHub Pull Requests.
**/
export class PullRequestFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=commentControl" })
  commentControl?: PullRequestFilterCommentControlEnum;

  @Metadata({ data: "json, name=invertRegex" })
  invertRegex?: boolean;
}
