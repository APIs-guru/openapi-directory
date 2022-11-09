import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2DeidentifyTemplate } from "./googleprivacydlpv2deidentifytemplate";


// GooglePrivacyDlpV2CreateDeidentifyTemplateRequest
/** 
 * Request message for CreateDeidentifyTemplate.
**/
export class GooglePrivacyDlpV2CreateDeidentifyTemplateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=deidentifyTemplate" })
  deidentifyTemplate?: GooglePrivacyDlpV2DeidentifyTemplate;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=templateId" })
  templateId?: string;
}
