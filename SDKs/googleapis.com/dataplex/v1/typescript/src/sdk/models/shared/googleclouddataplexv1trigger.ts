import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1TriggerSchedule } from "./googleclouddataplexv1triggerschedule";



// GoogleCloudDataplexV1Trigger
/** 
 * DataScan scheduling and trigger settings.
**/
export class GoogleCloudDataplexV1Trigger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=onDemand" })
  onDemand?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: GoogleCloudDataplexV1TriggerSchedule;
}
