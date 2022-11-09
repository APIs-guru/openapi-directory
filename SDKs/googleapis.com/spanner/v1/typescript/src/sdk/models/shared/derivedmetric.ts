import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LocalizedString } from "./localizedstring";
import { LocalizedString } from "./localizedstring";


// DerivedMetric
/** 
 * A message representing a derived metric.
**/
export class DerivedMetric extends SpeakeasyBase {
  @Metadata({ data: "json, name=denominator" })
  denominator?: LocalizedString;

  @Metadata({ data: "json, name=numerator" })
  numerator?: LocalizedString;
}
