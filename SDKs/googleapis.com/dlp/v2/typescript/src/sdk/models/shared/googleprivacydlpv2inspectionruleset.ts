import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
import { GooglePrivacyDlpV2InspectionRule } from "./googleprivacydlpv2inspectionrule";



// GooglePrivacyDlpV2InspectionRuleSet
/** 
 * Rule set for modifying a set of infoTypes to alter behavior under certain circumstances, depending on the specific details of the rules within the set.
**/
export class GooglePrivacyDlpV2InspectionRuleSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=infoTypes", elemType: GooglePrivacyDlpV2InfoType })
  infoTypes?: GooglePrivacyDlpV2InfoType[];

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: GooglePrivacyDlpV2InspectionRule })
  rules?: GooglePrivacyDlpV2InspectionRule[];
}
