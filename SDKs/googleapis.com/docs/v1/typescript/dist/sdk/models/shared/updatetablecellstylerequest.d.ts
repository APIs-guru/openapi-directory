import { SpeakeasyBase } from "../../../internal/utils";
import { TableCellStyle } from "./tablecellstyle";
import { TableRange } from "./tablerange";
import { Location } from "./location";
/**
 * Updates the style of a range of table cells.
**/
export declare class UpdateTableCellStyleRequest extends SpeakeasyBase {
    fields?: string;
    tableCellStyle?: TableCellStyle;
    tableRange?: TableRange;
    tableStartLocation?: Location;
}
