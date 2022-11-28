import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Upcoming maintenance schedule. If no maintenance is scheduled, fields are not populated.
**/
export declare class MaintenanceSchedule extends SpeakeasyBase {
    canReschedule?: boolean;
    endTime?: string;
    scheduleDeadlineTime?: string;
    startTime?: string;
}
/**
 * Upcoming maintenance schedule. If no maintenance is scheduled, fields are not populated.
**/
export declare class MaintenanceScheduleInput extends SpeakeasyBase {
    canReschedule?: boolean;
}
