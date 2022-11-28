import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MaintenanceSchedule
/** 
 * Upcoming maintenance schedule.
**/
export class MaintenanceSchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduleDeadlineTime" })
  scheduleDeadlineTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
