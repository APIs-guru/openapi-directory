import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2ByteContentItem } from "./googleprivacydlpv2bytecontentitem";
import { GooglePrivacyDlpV2ImageRedactionConfig } from "./googleprivacydlpv2imageredactionconfig";
import { GooglePrivacyDlpV2InspectConfig } from "./googleprivacydlpv2inspectconfig";


// GooglePrivacyDlpV2RedactImageRequest
/** 
 * Request to search for potentially sensitive info in an image and redact it by covering it with a colored rectangle.
**/
export class GooglePrivacyDlpV2RedactImageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=byteItem" })
  byteItem?: GooglePrivacyDlpV2ByteContentItem;

  @Metadata({ data: "json, name=imageRedactionConfigs", elemType: shared.GooglePrivacyDlpV2ImageRedactionConfig })
  imageRedactionConfigs?: GooglePrivacyDlpV2ImageRedactionConfig[];

  @Metadata({ data: "json, name=includeFindings" })
  includeFindings?: boolean;

  @Metadata({ data: "json, name=inspectConfig" })
  inspectConfig?: GooglePrivacyDlpV2InspectConfig;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;
}
