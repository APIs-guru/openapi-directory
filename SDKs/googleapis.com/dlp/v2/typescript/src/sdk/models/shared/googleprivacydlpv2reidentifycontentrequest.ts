import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2InspectConfig } from "./googleprivacydlpv2inspectconfig";
import { GooglePrivacyDlpV2ContentItem } from "./googleprivacydlpv2contentitem";
import { GooglePrivacyDlpV2DeidentifyConfig } from "./googleprivacydlpv2deidentifyconfig";


// GooglePrivacyDlpV2ReidentifyContentRequest
/** 
 * Request to re-identify an item.
**/
export class GooglePrivacyDlpV2ReidentifyContentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=inspectConfig" })
  inspectConfig?: GooglePrivacyDlpV2InspectConfig;

  @Metadata({ data: "json, name=inspectTemplateName" })
  inspectTemplateName?: string;

  @Metadata({ data: "json, name=item" })
  item?: GooglePrivacyDlpV2ContentItem;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=reidentifyConfig" })
  reidentifyConfig?: GooglePrivacyDlpV2DeidentifyConfig;

  @Metadata({ data: "json, name=reidentifyTemplateName" })
  reidentifyTemplateName?: string;
}
