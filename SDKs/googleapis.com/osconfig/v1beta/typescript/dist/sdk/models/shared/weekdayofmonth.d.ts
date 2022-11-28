import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WeekDayOfMonthDayOfWeekEnum {
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
 * Represents one week day in a month. An example is "the 4th Sunday".
**/
export declare class WeekDayOfMonth extends SpeakeasyBase {
    dayOfWeek?: WeekDayOfMonthDayOfWeekEnum;
    dayOffset?: number;
    weekOrdinal?: number;
}
