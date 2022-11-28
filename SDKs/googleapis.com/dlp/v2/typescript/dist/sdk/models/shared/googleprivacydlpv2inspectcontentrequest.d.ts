import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InspectConfig } from "./googleprivacydlpv2inspectconfig";
import { GooglePrivacyDlpV2ContentItem } from "./googleprivacydlpv2contentitem";
/**
 * Request to search for potentially sensitive info in a ContentItem.
**/
export declare class GooglePrivacyDlpV2InspectContentRequest extends SpeakeasyBase {
    inspectConfig?: GooglePrivacyDlpV2InspectConfig;
    inspectTemplateName?: string;
    item?: GooglePrivacyDlpV2ContentItem;
    locationId?: string;
}
