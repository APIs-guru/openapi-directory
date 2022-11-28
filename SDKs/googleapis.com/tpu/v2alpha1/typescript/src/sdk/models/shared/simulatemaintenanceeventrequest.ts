import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SimulateMaintenanceEventRequest
/** 
 * Request for SimulateMaintenanceEvent.
**/
export class SimulateMaintenanceEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=workerIds" })
  workerIds?: string[];
}
