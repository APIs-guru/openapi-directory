import { SpeakeasyBase } from "../../../internal/utils";
import { TableCellLocation } from "./tablecelllocation";
/**
 * Inserts an empty column into a table.
**/
export declare class InsertTableColumnRequest extends SpeakeasyBase {
    insertRight?: boolean;
    tableCellLocation?: TableCellLocation;
}
