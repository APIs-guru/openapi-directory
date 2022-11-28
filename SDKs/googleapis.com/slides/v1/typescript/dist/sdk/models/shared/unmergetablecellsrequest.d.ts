import { SpeakeasyBase } from "../../../internal/utils";
import { TableRange } from "./tablerange";
/**
 * Unmerges cells in a Table.
**/
export declare class UnmergeTableCellsRequest extends SpeakeasyBase {
    objectId?: string;
    tableRange?: TableRange;
}
