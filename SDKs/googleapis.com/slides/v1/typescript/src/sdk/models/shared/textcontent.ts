import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { List } from "./list";
import { TextElement } from "./textelement";


// TextContent
/** 
 * The general text content. The text must reside in a compatible shape (e.g. text box or rectangle) or a table cell in a page.
**/
export class TextContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=lists", elemType: shared.List })
  lists?: Map<string, List>;

  @Metadata({ data: "json, name=textElements", elemType: shared.TextElement })
  textElements?: TextElement[];
}
