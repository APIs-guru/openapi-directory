import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2JobTriggerInput } from "./googleprivacydlpv2jobtrigger";



// GooglePrivacyDlpV2CreateJobTriggerRequestInput
/** 
 * Request message for CreateJobTrigger.
**/
export class GooglePrivacyDlpV2CreateJobTriggerRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobTrigger" })
  jobTrigger?: GooglePrivacyDlpV2JobTriggerInput;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=triggerId" })
  triggerId?: string;
}
