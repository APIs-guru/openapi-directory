import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2HotwordRule } from "./googleprivacydlpv2hotwordrule";
/**
 * Deprecated; use `InspectionRuleSet` instead. Rule for modifying a `CustomInfoType` to alter behavior under certain circumstances, depending on the specific details of the rule. Not supported for the `surrogate_type` custom infoType.
**/
export declare class GooglePrivacyDlpV2DetectionRule extends SpeakeasyBase {
    hotwordRule?: GooglePrivacyDlpV2HotwordRule;
}
