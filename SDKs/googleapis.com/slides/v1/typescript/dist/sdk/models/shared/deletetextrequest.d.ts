import { SpeakeasyBase } from "../../../internal/utils";
import { TableCellLocation } from "./tablecelllocation";
import { Range } from "./range";
/**
 * Deletes text from a shape or a table cell.
**/
export declare class DeleteTextRequest extends SpeakeasyBase {
    cellLocation?: TableCellLocation;
    objectId?: string;
    textRange?: Range;
}
