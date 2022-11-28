import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalizedString } from "./localizedstring";



// DerivedMetric
/** 
 * A message representing a derived metric.
**/
export class DerivedMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=denominator" })
  denominator?: LocalizedString;

  @SpeakeasyMetadata({ data: "json, name=numerator" })
  numerator?: LocalizedString;
}
