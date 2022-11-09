import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GridRange } from "./gridrange";
import { SortSpec } from "./sortspec";


// SortRangeRequest
/** 
 * Sorts data in rows based on a sort order per column.
**/
export class SortRangeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=range" })
  range?: GridRange;

  @Metadata({ data: "json, name=sortSpecs", elemType: shared.SortSpec })
  sortSpecs?: SortSpec[];
}
