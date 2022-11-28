import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WorkerResource
/** 
 * Configuration for resources used by Airflow workers.
**/
export class WorkerResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpu" })
  cpu?: number;

  @SpeakeasyMetadata({ data: "json, name=maxCount" })
  maxCount?: number;

  @SpeakeasyMetadata({ data: "json, name=memoryGb" })
  memoryGb?: number;

  @SpeakeasyMetadata({ data: "json, name=minCount" })
  minCount?: number;

  @SpeakeasyMetadata({ data: "json, name=storageGb" })
  storageGb?: number;
}
