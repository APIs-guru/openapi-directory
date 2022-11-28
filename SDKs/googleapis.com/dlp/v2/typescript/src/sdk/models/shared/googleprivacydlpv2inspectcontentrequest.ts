import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InspectConfig } from "./googleprivacydlpv2inspectconfig";
import { GooglePrivacyDlpV2ContentItem } from "./googleprivacydlpv2contentitem";



// GooglePrivacyDlpV2InspectContentRequest
/** 
 * Request to search for potentially sensitive info in a ContentItem.
**/
export class GooglePrivacyDlpV2InspectContentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inspectConfig" })
  inspectConfig?: GooglePrivacyDlpV2InspectConfig;

  @SpeakeasyMetadata({ data: "json, name=inspectTemplateName" })
  inspectTemplateName?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: GooglePrivacyDlpV2ContentItem;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;
}
