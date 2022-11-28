import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GridRange } from "./gridrange";


export enum MergeCellsRequestMergeTypeEnum {
    MergeAll = "MERGE_ALL",
    MergeColumns = "MERGE_COLUMNS",
    MergeRows = "MERGE_ROWS"
}


// MergeCellsRequest
/** 
 * Merges all cells in the range.
**/
export class MergeCellsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mergeType" })
  mergeType?: MergeCellsRequestMergeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: GridRange;
}
