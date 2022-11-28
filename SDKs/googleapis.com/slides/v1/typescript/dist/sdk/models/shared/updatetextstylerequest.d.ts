import { SpeakeasyBase } from "../../../internal/utils";
import { TableCellLocation } from "./tablecelllocation";
import { TextStyle } from "./textstyle";
import { Range } from "./range";
/**
 * Update the styling of text in a Shape or Table.
**/
export declare class UpdateTextStyleRequest extends SpeakeasyBase {
    cellLocation?: TableCellLocation;
    fields?: string;
    objectId?: string;
    style?: TextStyle;
    textRange?: Range;
}
