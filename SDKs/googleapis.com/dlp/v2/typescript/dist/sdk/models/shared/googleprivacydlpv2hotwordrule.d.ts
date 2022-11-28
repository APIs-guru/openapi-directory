import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Regex } from "./googleprivacydlpv2regex";
import { GooglePrivacyDlpV2LikelihoodAdjustment } from "./googleprivacydlpv2likelihoodadjustment";
import { GooglePrivacyDlpV2Proximity } from "./googleprivacydlpv2proximity";
/**
 * The rule that adjusts the likelihood of findings within a certain proximity of hotwords.
**/
export declare class GooglePrivacyDlpV2HotwordRule extends SpeakeasyBase {
    hotwordRegex?: GooglePrivacyDlpV2Regex;
    likelihoodAdjustment?: GooglePrivacyDlpV2LikelihoodAdjustment;
    proximity?: GooglePrivacyDlpV2Proximity;
}
