import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SchedulerResource
/** 
 * Configuration for resources used by Airflow schedulers.
**/
export class SchedulerResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=cpu" })
  cpu?: number;

  @Metadata({ data: "json, name=memoryGb" })
  memoryGb?: number;

  @Metadata({ data: "json, name=storageGb" })
  storageGb?: number;
}
