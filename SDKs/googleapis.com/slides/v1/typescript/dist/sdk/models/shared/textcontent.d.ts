import { SpeakeasyBase } from "../../../internal/utils";
import { List } from "./list";
import { TextElement } from "./textelement";
/**
 * The general text content. The text must reside in a compatible shape (e.g. text box or rectangle) or a table cell in a page.
**/
export declare class TextContent extends SpeakeasyBase {
    lists?: Map<string, List>;
    textElements?: TextElement[];
}
