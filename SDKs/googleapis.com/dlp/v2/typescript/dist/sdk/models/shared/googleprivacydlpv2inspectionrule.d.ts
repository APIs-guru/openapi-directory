import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2ExclusionRule } from "./googleprivacydlpv2exclusionrule";
import { GooglePrivacyDlpV2HotwordRule } from "./googleprivacydlpv2hotwordrule";
/**
 * A single inspection rule to be applied to infoTypes, specified in `InspectionRuleSet`.
**/
export declare class GooglePrivacyDlpV2InspectionRule extends SpeakeasyBase {
    exclusionRule?: GooglePrivacyDlpV2ExclusionRule;
    hotwordRule?: GooglePrivacyDlpV2HotwordRule;
}
