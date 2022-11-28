import { SpeakeasyBase } from "../../../internal/utils";
import { GridRange } from "./gridrange";
import { SortSpec } from "./sortspec";
/**
 * Sorts data in rows based on a sort order per column.
**/
export declare class SortRangeRequest extends SpeakeasyBase {
    range?: GridRange;
    sortSpecs?: SortSpec[];
}
