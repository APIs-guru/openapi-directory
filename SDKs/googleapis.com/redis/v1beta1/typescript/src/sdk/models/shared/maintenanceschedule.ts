import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MaintenanceSchedule
/** 
 * Upcoming maintenance schedule. If no maintenance is scheduled, fields are not populated.
**/
export class MaintenanceSchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=canReschedule" })
  canReschedule?: boolean;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=scheduleDeadlineTime" })
  scheduleDeadlineTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
