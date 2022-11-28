import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WeekDayMetricsDayEnum {
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
 * Metrics for a week day.
**/
export declare class WeekDayMetrics extends SpeakeasyBase {
    day?: WeekDayMetricsDayEnum;
    missedCallsCount?: number;
}
