import { SpeakeasyBase } from "../../../internal/utils";
import { TableCellLocation } from "./tablecelllocation";
/**
 * Inserts columns into a table. Other columns in the table will be resized to fit the new column.
**/
export declare class InsertTableColumnsRequest extends SpeakeasyBase {
    cellLocation?: TableCellLocation;
    insertRight?: boolean;
    number?: number;
    tableObjectId?: string;
}
