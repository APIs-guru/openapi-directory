import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2RecordCondition } from "./googleprivacydlpv2recordcondition";


// GooglePrivacyDlpV2RecordSuppression
/** 
 * Configuration to suppress records whose suppression conditions evaluate to true.
**/
export class GooglePrivacyDlpV2RecordSuppression extends SpeakeasyBase {
  @Metadata({ data: "json, name=condition" })
  condition?: GooglePrivacyDlpV2RecordCondition;
}
