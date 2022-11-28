import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";



// CommentThreadReplies
/** 
 * Comments written in (direct or indirect) reply to the top level comment.
**/
export class CommentThreadReplies extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comments", elemType: Comment })
  comments?: Comment[];
}
