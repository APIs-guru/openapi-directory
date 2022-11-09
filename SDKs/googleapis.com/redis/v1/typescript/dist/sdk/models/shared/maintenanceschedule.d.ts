import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Upcoming maintenance schedule. If no maintenance is scheduled, fields are not populated.
**/
export declare class MaintenanceSchedule extends SpeakeasyBase {
    canReschedule?: boolean;
    endTime?: string;
    scheduleDeadlineTime?: string;
    startTime?: string;
}
