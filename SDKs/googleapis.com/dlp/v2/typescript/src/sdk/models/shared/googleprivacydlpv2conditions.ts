import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Condition } from "./googleprivacydlpv2condition";



// GooglePrivacyDlpV2Conditions
/** 
 * A collection of conditions.
**/
export class GooglePrivacyDlpV2Conditions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conditions", elemType: GooglePrivacyDlpV2Condition })
  conditions?: GooglePrivacyDlpV2Condition[];
}
