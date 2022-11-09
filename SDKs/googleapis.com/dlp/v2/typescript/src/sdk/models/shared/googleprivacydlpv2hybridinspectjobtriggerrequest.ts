import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2HybridContentItem } from "./googleprivacydlpv2hybridcontentitem";


// GooglePrivacyDlpV2HybridInspectJobTriggerRequest
/** 
 * Request to search for potentially sensitive info in a custom location.
**/
export class GooglePrivacyDlpV2HybridInspectJobTriggerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=hybridItem" })
  hybridItem?: GooglePrivacyDlpV2HybridContentItem;
}
