import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2Regex } from "./googleprivacydlpv2regex";
import { GooglePrivacyDlpV2LikelihoodAdjustment } from "./googleprivacydlpv2likelihoodadjustment";
import { GooglePrivacyDlpV2Proximity } from "./googleprivacydlpv2proximity";


// GooglePrivacyDlpV2HotwordRule
/** 
 * The rule that adjusts the likelihood of findings within a certain proximity of hotwords.
**/
export class GooglePrivacyDlpV2HotwordRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=hotwordRegex" })
  hotwordRegex?: GooglePrivacyDlpV2Regex;

  @Metadata({ data: "json, name=likelihoodAdjustment" })
  likelihoodAdjustment?: GooglePrivacyDlpV2LikelihoodAdjustment;

  @Metadata({ data: "json, name=proximity" })
  proximity?: GooglePrivacyDlpV2Proximity;
}
