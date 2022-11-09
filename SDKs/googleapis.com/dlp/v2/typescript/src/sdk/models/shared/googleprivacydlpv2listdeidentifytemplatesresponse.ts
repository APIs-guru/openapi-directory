import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2DeidentifyTemplate } from "./googleprivacydlpv2deidentifytemplate";


// GooglePrivacyDlpV2ListDeidentifyTemplatesResponse
/** 
 * Response message for ListDeidentifyTemplates.
**/
export class GooglePrivacyDlpV2ListDeidentifyTemplatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deidentifyTemplates", elemType: shared.GooglePrivacyDlpV2DeidentifyTemplate })
  deidentifyTemplates?: GooglePrivacyDlpV2DeidentifyTemplate[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
