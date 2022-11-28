import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DoubleRange } from "./doublerange";



// DoubleMatcher
/** 
 * Specifies the way to match a double value.
**/
export class DoubleMatcher extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exact" })
  exact?: number;

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: DoubleRange;
}
