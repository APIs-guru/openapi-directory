import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WorkerResource
/** 
 * Configuration for resources used by Airflow workers.
**/
export class WorkerResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpu" })
  cpu?: number;

  @Metadata({ data: "json, name=maxCount" })
  maxCount?: number;

  @Metadata({ data: "json, name=memoryGb" })
  memoryGb?: number;

  @Metadata({ data: "json, name=minCount" })
  minCount?: number;

  @Metadata({ data: "json, name=storageGb" })
  storageGb?: number;
}
