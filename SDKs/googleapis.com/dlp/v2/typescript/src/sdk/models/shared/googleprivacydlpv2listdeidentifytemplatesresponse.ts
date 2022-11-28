import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2DeidentifyTemplate } from "./googleprivacydlpv2deidentifytemplate";



// GooglePrivacyDlpV2ListDeidentifyTemplatesResponse
/** 
 * Response message for ListDeidentifyTemplates.
**/
export class GooglePrivacyDlpV2ListDeidentifyTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deidentifyTemplates", elemType: GooglePrivacyDlpV2DeidentifyTemplate })
  deidentifyTemplates?: GooglePrivacyDlpV2DeidentifyTemplate[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
