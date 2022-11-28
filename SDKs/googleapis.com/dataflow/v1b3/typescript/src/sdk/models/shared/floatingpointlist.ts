import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FloatingPointList
/** 
 * A metric value representing a list of floating point numbers.
**/
export class FloatingPointList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=elements" })
  elements?: number[];
}
