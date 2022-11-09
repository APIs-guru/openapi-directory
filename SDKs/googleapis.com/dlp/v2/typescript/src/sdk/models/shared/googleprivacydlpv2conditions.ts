import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2Condition } from "./googleprivacydlpv2condition";


// GooglePrivacyDlpV2Conditions
/** 
 * A collection of conditions.
**/
export class GooglePrivacyDlpV2Conditions extends SpeakeasyBase {
  @Metadata({ data: "json, name=conditions", elemType: shared.GooglePrivacyDlpV2Condition })
  conditions?: GooglePrivacyDlpV2Condition[];
}
