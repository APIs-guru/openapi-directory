import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2InspectTemplate } from "./googleprivacydlpv2inspecttemplate";


// GooglePrivacyDlpV2CreateInspectTemplateRequest
/** 
 * Request message for CreateInspectTemplate.
**/
export class GooglePrivacyDlpV2CreateInspectTemplateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=inspectTemplate" })
  inspectTemplate?: GooglePrivacyDlpV2InspectTemplate;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=templateId" })
  templateId?: string;
}
