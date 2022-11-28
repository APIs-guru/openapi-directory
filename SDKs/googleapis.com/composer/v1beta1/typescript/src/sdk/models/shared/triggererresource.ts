import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TriggererResource
/** 
 * Configuration for resources used by Airflow triggerers.
**/
export class TriggererResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=cpu" })
  cpu?: number;

  @SpeakeasyMetadata({ data: "json, name=memoryGb" })
  memoryGb?: number;
}
