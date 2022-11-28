import { SpeakeasyBase } from "../../../internal/utils";
import { TimeOfDay } from "./timeofday";
export declare enum TimePeriodCloseDayEnum {
    DayOfWeekUnspecified = "DAY_OF_WEEK_UNSPECIFIED",
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY",
    Sunday = "SUNDAY"
}
export declare enum TimePeriodOpenDayEnum {
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
 * Represents a span of time that the business is open, starting on the specified open day/time and closing on the specified close day/time. The closing time must occur after the opening time, for example later in the same day, or on a subsequent day.
**/
export declare class TimePeriod extends SpeakeasyBase {
    closeDay?: TimePeriodCloseDayEnum;
    closeTime?: TimeOfDay;
    openDay?: TimePeriodOpenDayEnum;
    openTime?: TimeOfDay;
}
