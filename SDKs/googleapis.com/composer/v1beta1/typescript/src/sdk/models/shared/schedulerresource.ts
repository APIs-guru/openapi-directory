import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SchedulerResource
/** 
 * Configuration for resources used by Airflow schedulers.
**/
export class SchedulerResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=cpu" })
  cpu?: number;

  @SpeakeasyMetadata({ data: "json, name=memoryGb" })
  memoryGb?: number;

  @SpeakeasyMetadata({ data: "json, name=storageGb" })
  storageGb?: number;
}
