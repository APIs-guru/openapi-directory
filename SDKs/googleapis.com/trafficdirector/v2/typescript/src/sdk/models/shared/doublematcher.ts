import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DoubleRange } from "./doublerange";


// DoubleMatcher
/** 
 * Specifies the way to match a double value.
**/
export class DoubleMatcher extends SpeakeasyBase {
  @Metadata({ data: "json, name=exact" })
  exact?: number;

  @Metadata({ data: "json, name=range" })
  range?: DoubleRange;
}
