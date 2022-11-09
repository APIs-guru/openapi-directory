import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ArticleAndParentComment } from "./articleandparentcomment";
import { TextEntry } from "./textentry";


// Context
/** 
 * Context is typically something that a Comment is referencing or replying to (such as an article, or previous comment). Note: Populate only ONE OF the following fields. The oneof syntax cannot be used because that would require nesting entries inside another message and breaking backwards compatibility. The server will return an error if more than one of the following fields is present.
**/
export class Context extends SpeakeasyBase {
  @Metadata({ data: "json, name=articleAndParentComment" })
  articleAndParentComment?: ArticleAndParentComment;

  @Metadata({ data: "json, name=entries", elemType: shared.TextEntry })
  entries?: TextEntry[];
}
