import { SpeakeasyBase } from "../../../internal/utils";
import { TimeOfDay } from "./timeofday";
export declare enum WeeklyMaintenanceWindowDayEnum {
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
 * Time window in which disruptive maintenance updates occur. Non-disruptive updates can occur inside or outside this window.
**/
export declare class WeeklyMaintenanceWindow extends SpeakeasyBase {
    day?: WeeklyMaintenanceWindowDayEnum;
    duration?: string;
    startTime?: TimeOfDay;
}
/**
 * Time window in which disruptive maintenance updates occur. Non-disruptive updates can occur inside or outside this window.
**/
export declare class WeeklyMaintenanceWindowInput extends SpeakeasyBase {
    day?: WeeklyMaintenanceWindowDayEnum;
    startTime?: TimeOfDay;
}
