import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MaintenanceWindowDayOfWeekEnum {
    DayOfWeekUnspecified = "DAY_OF_WEEK_UNSPECIFIED",
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY",
    Sunday = "SUNDAY"
}
/**
 * Maintenance window. This specifies when Dataproc Metastore may perform system maintenance operation to the service.
**/
export declare class MaintenanceWindow extends SpeakeasyBase {
    dayOfWeek?: MaintenanceWindowDayOfWeekEnum;
    hourOfDay?: number;
}
