import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Regex } from "./googleprivacydlpv2regex";
import { GooglePrivacyDlpV2LikelihoodAdjustment } from "./googleprivacydlpv2likelihoodadjustment";
import { GooglePrivacyDlpV2Proximity } from "./googleprivacydlpv2proximity";



// GooglePrivacyDlpV2HotwordRule
/** 
 * The rule that adjusts the likelihood of findings within a certain proximity of hotwords.
**/
export class GooglePrivacyDlpV2HotwordRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hotwordRegex" })
  hotwordRegex?: GooglePrivacyDlpV2Regex;

  @SpeakeasyMetadata({ data: "json, name=likelihoodAdjustment" })
  likelihoodAdjustment?: GooglePrivacyDlpV2LikelihoodAdjustment;

  @SpeakeasyMetadata({ data: "json, name=proximity" })
  proximity?: GooglePrivacyDlpV2Proximity;
}
