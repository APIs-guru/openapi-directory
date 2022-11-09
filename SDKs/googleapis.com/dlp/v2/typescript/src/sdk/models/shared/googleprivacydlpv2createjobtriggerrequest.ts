import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2JobTrigger } from "./googleprivacydlpv2jobtrigger";


// GooglePrivacyDlpV2CreateJobTriggerRequest
/** 
 * Request message for CreateJobTrigger.
**/
export class GooglePrivacyDlpV2CreateJobTriggerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobTrigger" })
  jobTrigger?: GooglePrivacyDlpV2JobTrigger;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=triggerId" })
  triggerId?: string;
}
