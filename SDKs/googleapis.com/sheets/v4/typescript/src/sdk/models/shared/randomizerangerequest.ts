import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GridRange } from "./gridrange";



// RandomizeRangeRequest
/** 
 * Randomizes the order of the rows in a range.
**/
export class RandomizeRangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: GridRange;
}
