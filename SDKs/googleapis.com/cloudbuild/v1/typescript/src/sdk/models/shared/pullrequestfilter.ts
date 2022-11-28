import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PullRequestFilterCommentControlEnum {
    CommentsDisabled = "COMMENTS_DISABLED",
    CommentsEnabled = "COMMENTS_ENABLED",
    CommentsEnabledForExternalContributorsOnly = "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"
}


// PullRequestFilter
/** 
 * PullRequestFilter contains filter properties for matching GitHub Pull Requests.
**/
export class PullRequestFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=commentControl" })
  commentControl?: PullRequestFilterCommentControlEnum;

  @SpeakeasyMetadata({ data: "json, name=invertRegex" })
  invertRegex?: boolean;
}
