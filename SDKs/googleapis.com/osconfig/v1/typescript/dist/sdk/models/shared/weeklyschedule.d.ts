import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WeeklyScheduleDayOfWeekEnum {
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
 * Represents a weekly schedule.
**/
export declare class WeeklySchedule extends SpeakeasyBase {
    dayOfWeek?: WeeklyScheduleDayOfWeekEnum;
}
