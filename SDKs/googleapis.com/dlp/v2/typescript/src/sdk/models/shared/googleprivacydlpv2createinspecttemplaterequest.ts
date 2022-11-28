import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InspectTemplateInput } from "./googleprivacydlpv2inspecttemplate";



// GooglePrivacyDlpV2CreateInspectTemplateRequestInput
/** 
 * Request message for CreateInspectTemplate.
**/
export class GooglePrivacyDlpV2CreateInspectTemplateRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inspectTemplate" })
  inspectTemplate?: GooglePrivacyDlpV2InspectTemplateInput;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=templateId" })
  templateId?: string;
}
