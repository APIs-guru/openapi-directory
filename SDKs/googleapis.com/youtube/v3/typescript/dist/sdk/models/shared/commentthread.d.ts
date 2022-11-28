import { SpeakeasyBase } from "../../../internal/utils";
import { CommentThreadReplies } from "./commentthreadreplies";
import { CommentThreadSnippet } from "./commentthreadsnippet";
/**
 * A *comment thread* represents information that applies to a top level comment and all its replies. It can also include the top level comment itself and some of the replies.
**/
export declare class CommentThread extends SpeakeasyBase {
    etag?: string;
    id?: string;
    kind?: string;
    replies?: CommentThreadReplies;
    snippet?: CommentThreadSnippet;
}
