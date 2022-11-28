import { SpeakeasyBase } from "../../../internal/utils";
import { TableCellLocation } from "./tablecelllocation";
/**
 * Inserts rows into a table.
**/
export declare class InsertTableRowsRequest extends SpeakeasyBase {
    cellLocation?: TableCellLocation;
    insertBelow?: boolean;
    number?: number;
    tableObjectId?: string;
}
