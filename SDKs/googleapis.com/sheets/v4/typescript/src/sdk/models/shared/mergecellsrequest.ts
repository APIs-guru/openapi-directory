import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GridRange } from "./gridrange";

export enum MergeCellsRequestMergeTypeEnum {
    MergeAll = "MERGE_ALL"
,    MergeColumns = "MERGE_COLUMNS"
,    MergeRows = "MERGE_ROWS"
}


// MergeCellsRequest
/** 
 * Merges all cells in the range.
**/
export class MergeCellsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=mergeType" })
  mergeType?: MergeCellsRequestMergeTypeEnum;

  @Metadata({ data: "json, name=range" })
  range?: GridRange;
}
