import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArticleAndParentComment } from "./articleandparentcomment";
import { TextEntry } from "./textentry";



// Context
/** 
 * Context is typically something that a Comment is referencing or replying to (such as an article, or previous comment). Note: Populate only ONE OF the following fields. The oneof syntax cannot be used because that would require nesting entries inside another message and breaking backwards compatibility. The server will return an error if more than one of the following fields is present.
**/
export class Context extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=articleAndParentComment" })
  articleAndParentComment?: ArticleAndParentComment;

  @SpeakeasyMetadata({ data: "json, name=entries", elemType: TextEntry })
  entries?: TextEntry[];
}
