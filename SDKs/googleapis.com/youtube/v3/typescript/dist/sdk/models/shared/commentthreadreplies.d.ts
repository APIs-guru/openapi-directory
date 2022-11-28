import { SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";
/**
 * Comments written in (direct or indirect) reply to the top level comment.
**/
export declare class CommentThreadReplies extends SpeakeasyBase {
    comments?: Comment[];
}
