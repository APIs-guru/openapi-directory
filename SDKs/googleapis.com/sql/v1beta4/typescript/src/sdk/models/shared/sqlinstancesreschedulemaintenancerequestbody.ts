import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Reschedule } from "./reschedule";



// SqlInstancesRescheduleMaintenanceRequestBody
/** 
 * Reschedule options for maintenance windows.
**/
export class SqlInstancesRescheduleMaintenanceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reschedule" })
  reschedule?: Reschedule;
}
