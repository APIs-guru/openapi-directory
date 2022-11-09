import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CommentSnippet } from "./commentsnippet";


// Comment
/** 
 * A *comment* represents a single YouTube comment.
**/
export class Comment extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=snippet" })
  snippet?: CommentSnippet;
}
