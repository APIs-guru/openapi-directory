import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SimulateMaintenanceEventRequest
/** 
 * Request for SimulateMaintenanceEvent.
**/
export class SimulateMaintenanceEventRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=workerIds" })
  workerIds?: string[];
}
