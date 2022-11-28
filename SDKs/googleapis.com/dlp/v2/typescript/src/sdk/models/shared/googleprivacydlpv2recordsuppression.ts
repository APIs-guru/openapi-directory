import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2RecordCondition } from "./googleprivacydlpv2recordcondition";



// GooglePrivacyDlpV2RecordSuppression
/** 
 * Configuration to suppress records whose suppression conditions evaluate to true.
**/
export class GooglePrivacyDlpV2RecordSuppression extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: GooglePrivacyDlpV2RecordCondition;
}
