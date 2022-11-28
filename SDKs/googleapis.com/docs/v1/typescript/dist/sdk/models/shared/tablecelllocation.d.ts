import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
/**
 * Location of a single cell within a table.
**/
export declare class TableCellLocation extends SpeakeasyBase {
    columnIndex?: number;
    rowIndex?: number;
    tableStartLocation?: Location;
}
