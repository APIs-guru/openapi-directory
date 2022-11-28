import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CommentThreadReplies } from "./commentthreadreplies";
import { CommentThreadSnippet } from "./commentthreadsnippet";



// CommentThread
/** 
 * A *comment thread* represents information that applies to a top level comment and all its replies. It can also include the top level comment itself and some of the replies.
**/
export class CommentThread extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=replies" })
  replies?: CommentThreadReplies;

  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: CommentThreadSnippet;
}
