import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2InspectTemplate } from "./googleprivacydlpv2inspecttemplate";


// GooglePrivacyDlpV2ListInspectTemplatesResponse
/** 
 * Response message for ListInspectTemplates.
**/
export class GooglePrivacyDlpV2ListInspectTemplatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=inspectTemplates", elemType: shared.GooglePrivacyDlpV2InspectTemplate })
  inspectTemplates?: GooglePrivacyDlpV2InspectTemplate[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
