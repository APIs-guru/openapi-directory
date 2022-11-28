import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2JobTrigger } from "./googleprivacydlpv2jobtrigger";



// GooglePrivacyDlpV2ListJobTriggersResponse
/** 
 * Response message for ListJobTriggers.
**/
export class GooglePrivacyDlpV2ListJobTriggersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobTriggers", elemType: GooglePrivacyDlpV2JobTrigger })
  jobTriggers?: GooglePrivacyDlpV2JobTrigger[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
