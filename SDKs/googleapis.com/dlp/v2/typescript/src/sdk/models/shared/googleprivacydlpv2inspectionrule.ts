import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2ExclusionRule } from "./googleprivacydlpv2exclusionrule";
import { GooglePrivacyDlpV2HotwordRule } from "./googleprivacydlpv2hotwordrule";


// GooglePrivacyDlpV2InspectionRule
/** 
 * A single inspection rule to be applied to infoTypes, specified in `InspectionRuleSet`.
**/
export class GooglePrivacyDlpV2InspectionRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=exclusionRule" })
  exclusionRule?: GooglePrivacyDlpV2ExclusionRule;

  @Metadata({ data: "json, name=hotwordRule" })
  hotwordRule?: GooglePrivacyDlpV2HotwordRule;
}
