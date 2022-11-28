import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InspectConfig } from "./googleprivacydlpv2inspectconfig";
import { GooglePrivacyDlpV2ContentItem } from "./googleprivacydlpv2contentitem";
import { GooglePrivacyDlpV2DeidentifyConfig } from "./googleprivacydlpv2deidentifyconfig";



// GooglePrivacyDlpV2ReidentifyContentRequest
/** 
 * Request to re-identify an item.
**/
export class GooglePrivacyDlpV2ReidentifyContentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inspectConfig" })
  inspectConfig?: GooglePrivacyDlpV2InspectConfig;

  @SpeakeasyMetadata({ data: "json, name=inspectTemplateName" })
  inspectTemplateName?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: GooglePrivacyDlpV2ContentItem;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=reidentifyConfig" })
  reidentifyConfig?: GooglePrivacyDlpV2DeidentifyConfig;

  @SpeakeasyMetadata({ data: "json, name=reidentifyTemplateName" })
  reidentifyTemplateName?: string;
}
