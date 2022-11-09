import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2InspectConfig } from "./googleprivacydlpv2inspectconfig";
import { GooglePrivacyDlpV2ContentItem } from "./googleprivacydlpv2contentitem";


// GooglePrivacyDlpV2InspectContentRequest
/** 
 * Request to search for potentially sensitive info in a ContentItem.
**/
export class GooglePrivacyDlpV2InspectContentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=inspectConfig" })
  inspectConfig?: GooglePrivacyDlpV2InspectConfig;

  @Metadata({ data: "json, name=inspectTemplateName" })
  inspectTemplateName?: string;

  @Metadata({ data: "json, name=item" })
  item?: GooglePrivacyDlpV2ContentItem;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;
}
