import { SpeakeasyBase } from "../../../internal/utils";
import { TableCellLocation } from "./tablecelllocation";
import { ParagraphStyle } from "./paragraphstyle";
import { Range } from "./range";
/**
 * Updates the styling for all of the paragraphs within a Shape or Table that overlap with the given text index range.
**/
export declare class UpdateParagraphStyleRequest extends SpeakeasyBase {
    cellLocation?: TableCellLocation;
    fields?: string;
    objectId?: string;
    style?: ParagraphStyle;
    textRange?: Range;
}
