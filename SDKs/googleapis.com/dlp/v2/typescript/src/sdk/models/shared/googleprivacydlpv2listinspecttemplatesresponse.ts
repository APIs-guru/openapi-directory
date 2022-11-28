import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InspectTemplate } from "./googleprivacydlpv2inspecttemplate";



// GooglePrivacyDlpV2ListInspectTemplatesResponse
/** 
 * Response message for ListInspectTemplates.
**/
export class GooglePrivacyDlpV2ListInspectTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inspectTemplates", elemType: GooglePrivacyDlpV2InspectTemplate })
  inspectTemplates?: GooglePrivacyDlpV2InspectTemplate[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
