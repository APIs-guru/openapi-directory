import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2DeidentifyConfig } from "./googleprivacydlpv2deidentifyconfig";
import { GooglePrivacyDlpV2InspectConfig } from "./googleprivacydlpv2inspectconfig";
import { GooglePrivacyDlpV2ContentItem } from "./googleprivacydlpv2contentitem";



// GooglePrivacyDlpV2DeidentifyContentRequest
/** 
 * Request to de-identify a ContentItem.
**/
export class GooglePrivacyDlpV2DeidentifyContentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deidentifyConfig" })
  deidentifyConfig?: GooglePrivacyDlpV2DeidentifyConfig;

  @SpeakeasyMetadata({ data: "json, name=deidentifyTemplateName" })
  deidentifyTemplateName?: string;

  @SpeakeasyMetadata({ data: "json, name=inspectConfig" })
  inspectConfig?: GooglePrivacyDlpV2InspectConfig;

  @SpeakeasyMetadata({ data: "json, name=inspectTemplateName" })
  inspectTemplateName?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: GooglePrivacyDlpV2ContentItem;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;
}
