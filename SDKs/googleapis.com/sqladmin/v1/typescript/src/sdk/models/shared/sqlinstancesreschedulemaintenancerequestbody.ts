import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Reschedule } from "./reschedule";


// SqlInstancesRescheduleMaintenanceRequestBody
/** 
 * Reschedule options for maintenance windows.
**/
export class SqlInstancesRescheduleMaintenanceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=reschedule" })
  reschedule?: Reschedule;
}
