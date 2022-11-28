import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MaintenanceScheduleInput
/** 
 * Upcoming maintenance schedule. If no maintenance is scheduled, fields are not populated.
**/
export class MaintenanceScheduleInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canReschedule" })
  canReschedule?: boolean;
}


// MaintenanceSchedule
/** 
 * Upcoming maintenance schedule. If no maintenance is scheduled, fields are not populated.
**/
export class MaintenanceSchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canReschedule" })
  canReschedule?: boolean;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduleDeadlineTime" })
  scheduleDeadlineTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
