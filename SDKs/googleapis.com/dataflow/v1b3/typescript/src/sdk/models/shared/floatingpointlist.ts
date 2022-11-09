import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FloatingPointList
/** 
 * A metric value representing a list of floating point numbers.
**/
export class FloatingPointList extends SpeakeasyBase {
  @Metadata({ data: "json, name=elements" })
  elements?: number[];
}
