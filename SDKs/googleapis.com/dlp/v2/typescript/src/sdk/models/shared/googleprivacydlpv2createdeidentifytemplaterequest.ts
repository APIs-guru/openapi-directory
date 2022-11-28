import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2DeidentifyTemplateInput } from "./googleprivacydlpv2deidentifytemplate";



// GooglePrivacyDlpV2CreateDeidentifyTemplateRequestInput
/** 
 * Request message for CreateDeidentifyTemplate.
**/
export class GooglePrivacyDlpV2CreateDeidentifyTemplateRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deidentifyTemplate" })
  deidentifyTemplate?: GooglePrivacyDlpV2DeidentifyTemplateInput;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=templateId" })
  templateId?: string;
}
