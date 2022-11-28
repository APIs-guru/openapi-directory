import { SpeakeasyBase } from "../../../internal/utils";
import { GridRange } from "./gridrange";
export declare enum MergeCellsRequestMergeTypeEnum {
    MergeAll = "MERGE_ALL",
    MergeColumns = "MERGE_COLUMNS",
    MergeRows = "MERGE_ROWS"
}
/**
 * Merges all cells in the range.
**/
export declare class MergeCellsRequest extends SpeakeasyBase {
    mergeType?: MergeCellsRequestMergeTypeEnum;
    range?: GridRange;
}
