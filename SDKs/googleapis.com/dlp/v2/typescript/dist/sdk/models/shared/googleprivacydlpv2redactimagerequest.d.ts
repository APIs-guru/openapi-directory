import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2ByteContentItem } from "./googleprivacydlpv2bytecontentitem";
import { GooglePrivacyDlpV2ImageRedactionConfig } from "./googleprivacydlpv2imageredactionconfig";
import { GooglePrivacyDlpV2InspectConfig } from "./googleprivacydlpv2inspectconfig";
/**
 * Request to search for potentially sensitive info in an image and redact it by covering it with a colored rectangle.
**/
export declare class GooglePrivacyDlpV2RedactImageRequest extends SpeakeasyBase {
    byteItem?: GooglePrivacyDlpV2ByteContentItem;
    imageRedactionConfigs?: GooglePrivacyDlpV2ImageRedactionConfig[];
    includeFindings?: boolean;
    inspectConfig?: GooglePrivacyDlpV2InspectConfig;
    locationId?: string;
}
