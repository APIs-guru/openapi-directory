import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2ByteContentItem } from "./googleprivacydlpv2bytecontentitem";
import { GooglePrivacyDlpV2ImageRedactionConfig } from "./googleprivacydlpv2imageredactionconfig";
import { GooglePrivacyDlpV2InspectConfig } from "./googleprivacydlpv2inspectconfig";



// GooglePrivacyDlpV2RedactImageRequest
/** 
 * Request to search for potentially sensitive info in an image and redact it by covering it with a colored rectangle.
**/
export class GooglePrivacyDlpV2RedactImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=byteItem" })
  byteItem?: GooglePrivacyDlpV2ByteContentItem;

  @SpeakeasyMetadata({ data: "json, name=imageRedactionConfigs", elemType: GooglePrivacyDlpV2ImageRedactionConfig })
  imageRedactionConfigs?: GooglePrivacyDlpV2ImageRedactionConfig[];

  @SpeakeasyMetadata({ data: "json, name=includeFindings" })
  includeFindings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=inspectConfig" })
  inspectConfig?: GooglePrivacyDlpV2InspectConfig;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;
}
