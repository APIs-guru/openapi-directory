import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { List } from "./list";
import { TextElement } from "./textelement";



// TextContent
/** 
 * The general text content. The text must reside in a compatible shape (e.g. text box or rectangle) or a table cell in a page.
**/
export class TextContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lists", elemType: List })
  lists?: Map<string, List>;

  @SpeakeasyMetadata({ data: "json, name=textElements", elemType: TextElement })
  textElements?: TextElement[];
}
