import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CommentSnippet } from "./commentsnippet";



// Comment
/** 
 * A *comment* represents a single YouTube comment.
**/
export class Comment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: CommentSnippet;
}
