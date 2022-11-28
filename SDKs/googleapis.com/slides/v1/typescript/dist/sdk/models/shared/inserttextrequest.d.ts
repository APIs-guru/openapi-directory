import { SpeakeasyBase } from "../../../internal/utils";
import { TableCellLocation } from "./tablecelllocation";
/**
 * Inserts text into a shape or a table cell.
**/
export declare class InsertTextRequest extends SpeakeasyBase {
    cellLocation?: TableCellLocation;
    insertionIndex?: number;
    objectId?: string;
    text?: string;
}
