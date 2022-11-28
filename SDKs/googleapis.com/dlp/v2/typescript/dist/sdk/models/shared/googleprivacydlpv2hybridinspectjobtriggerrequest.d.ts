import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2HybridContentItem } from "./googleprivacydlpv2hybridcontentitem";
/**
 * Request to search for potentially sensitive info in a custom location.
**/
export declare class GooglePrivacyDlpV2HybridInspectJobTriggerRequest extends SpeakeasyBase {
    hybridItem?: GooglePrivacyDlpV2HybridContentItem;
}
