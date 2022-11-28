import { SpeakeasyBase } from "../../../internal/utils";
import { TableCellLocation } from "./tablecelllocation";
/**
 * Deletes a row from a table.
**/
export declare class DeleteTableRowRequest extends SpeakeasyBase {
    cellLocation?: TableCellLocation;
    tableObjectId?: string;
}
