import { SpeakeasyBase } from "../../../internal/utils";
import { TableRowStyle } from "./tablerowstyle";
import { Location } from "./location";
/**
 * Updates the TableRowStyle of rows in a table.
**/
export declare class UpdateTableRowStyleRequest extends SpeakeasyBase {
    fields?: string;
    rowIndices?: number[];
    tableRowStyle?: TableRowStyle;
    tableStartLocation?: Location;
}
