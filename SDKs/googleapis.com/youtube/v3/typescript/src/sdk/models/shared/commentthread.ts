import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CommentThreadReplies } from "./commentthreadreplies";
import { CommentThreadSnippet } from "./commentthreadsnippet";


// CommentThread
/** 
 * A *comment thread* represents information that applies to a top level comment and all its replies. It can also include the top level comment itself and some of the replies.
**/
export class CommentThread extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=replies" })
  replies?: CommentThreadReplies;

  @Metadata({ data: "json, name=snippet" })
  snippet?: CommentThreadSnippet;
}
