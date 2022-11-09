import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2DeidentifyConfig } from "./googleprivacydlpv2deidentifyconfig";
import { GooglePrivacyDlpV2InspectConfig } from "./googleprivacydlpv2inspectconfig";
import { GooglePrivacyDlpV2ContentItem } from "./googleprivacydlpv2contentitem";


// GooglePrivacyDlpV2DeidentifyContentRequest
/** 
 * Request to de-identify a ContentItem.
**/
export class GooglePrivacyDlpV2DeidentifyContentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=deidentifyConfig" })
  deidentifyConfig?: GooglePrivacyDlpV2DeidentifyConfig;

  @Metadata({ data: "json, name=deidentifyTemplateName" })
  deidentifyTemplateName?: string;

  @Metadata({ data: "json, name=inspectConfig" })
  inspectConfig?: GooglePrivacyDlpV2InspectConfig;

  @Metadata({ data: "json, name=inspectTemplateName" })
  inspectTemplateName?: string;

  @Metadata({ data: "json, name=item" })
  item?: GooglePrivacyDlpV2ContentItem;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;
}
