import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GridRange } from "./gridrange";


// UnmergeCellsRequest
/** 
 * Unmerges cells in the given range.
**/
export class UnmergeCellsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=range" })
  range?: GridRange;
}
