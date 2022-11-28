import { SpeakeasyBase } from "../../../internal/utils";
import { TimeOfDay } from "./timeofday";
import { TimeRange } from "./timerange";
export declare enum TimeDimensionDayOfWeekEnum {
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
 * The dimension for which data is divided over.
**/
export declare class TimeDimension extends SpeakeasyBase {
    dayOfWeek?: TimeDimensionDayOfWeekEnum;
    timeOfDay?: TimeOfDay;
    timeRange?: TimeRange;
}
