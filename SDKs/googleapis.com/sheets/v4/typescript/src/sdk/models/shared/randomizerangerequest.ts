import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GridRange } from "./gridrange";


// RandomizeRangeRequest
/** 
 * Randomizes the order of the rows in a range.
**/
export class RandomizeRangeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=range" })
  range?: GridRange;
}
