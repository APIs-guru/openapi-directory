import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TextEntry } from "./textentry";
import { TextEntry } from "./textentry";


// ArticleAndParentComment
/** 
 * A type of context specific to a comment left on a single-threaded comment message board, where comments are either a top level comment or the child of a top level comment.
**/
export class ArticleAndParentComment extends SpeakeasyBase {
  @Metadata({ data: "json, name=article" })
  article?: TextEntry;

  @Metadata({ data: "json, name=parentComment" })
  parentComment?: TextEntry;
}
