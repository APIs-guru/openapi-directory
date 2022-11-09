import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
import { GooglePrivacyDlpV2InspectionRule } from "./googleprivacydlpv2inspectionrule";


// GooglePrivacyDlpV2InspectionRuleSet
/** 
 * Rule set for modifying a set of infoTypes to alter behavior under certain circumstances, depending on the specific details of the rules within the set.
**/
export class GooglePrivacyDlpV2InspectionRuleSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=infoTypes", elemType: shared.GooglePrivacyDlpV2InfoType })
  infoTypes?: GooglePrivacyDlpV2InfoType[];

  @Metadata({ data: "json, name=rules", elemType: shared.GooglePrivacyDlpV2InspectionRule })
  rules?: GooglePrivacyDlpV2InspectionRule[];
}
