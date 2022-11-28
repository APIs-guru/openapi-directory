import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GridRange } from "./gridrange";



// UnmergeCellsRequest
/** 
 * Unmerges cells in the given range.
**/
export class UnmergeCellsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: GridRange;
}
