import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2JobTrigger } from "./googleprivacydlpv2jobtrigger";


// GooglePrivacyDlpV2ListJobTriggersResponse
/** 
 * Response message for ListJobTriggers.
**/
export class GooglePrivacyDlpV2ListJobTriggersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobTriggers", elemType: shared.GooglePrivacyDlpV2JobTrigger })
  jobTriggers?: GooglePrivacyDlpV2JobTrigger[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
