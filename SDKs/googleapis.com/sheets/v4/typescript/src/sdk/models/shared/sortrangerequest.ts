import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GridRange } from "./gridrange";
import { SortSpec } from "./sortspec";



// SortRangeRequest
/** 
 * Sorts data in rows based on a sort order per column.
**/
export class SortRangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: GridRange;

  @SpeakeasyMetadata({ data: "json, name=sortSpecs", elemType: SortSpec })
  sortSpecs?: SortSpec[];
}
