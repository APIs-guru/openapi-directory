import { SpeakeasyBase } from "../../../internal/utils";
import { TableCellLocation } from "./tablecelllocation";
/**
 * Inserts an empty row into a table.
**/
export declare class InsertTableRowRequest extends SpeakeasyBase {
    insertBelow?: boolean;
    tableCellLocation?: TableCellLocation;
}
