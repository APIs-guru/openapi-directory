import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Comment } from "./comment";


// CommentThreadReplies
/** 
 * Comments written in (direct or indirect) reply to the top level comment.
**/
export class CommentThreadReplies extends SpeakeasyBase {
  @Metadata({ data: "json, name=comments", elemType: shared.Comment })
  comments?: Comment[];
}
