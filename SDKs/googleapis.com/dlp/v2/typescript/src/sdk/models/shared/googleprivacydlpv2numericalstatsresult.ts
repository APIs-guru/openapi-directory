import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Value } from "./googleprivacydlpv2value";



// GooglePrivacyDlpV2NumericalStatsResult
/** 
 * Result of the numerical stats computation.
**/
export class GooglePrivacyDlpV2NumericalStatsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxValue" })
  maxValue?: GooglePrivacyDlpV2Value;

  @SpeakeasyMetadata({ data: "json, name=minValue" })
  minValue?: GooglePrivacyDlpV2Value;

  @SpeakeasyMetadata({ data: "json, name=quantileValues", elemType: GooglePrivacyDlpV2Value })
  quantileValues?: GooglePrivacyDlpV2Value[];
}
