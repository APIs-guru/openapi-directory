import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDataplexV1TriggerSchedule
/** 
 * The scan is scheduled to run periodically.
**/
export class GoogleCloudDataplexV1TriggerSchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cron" })
  cron?: string;
}
