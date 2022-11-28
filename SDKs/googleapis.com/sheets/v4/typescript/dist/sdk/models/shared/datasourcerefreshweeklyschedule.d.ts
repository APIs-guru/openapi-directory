import { SpeakeasyBase } from "../../../internal/utils";
import { TimeOfDay } from "./timeofday";
export declare enum DataSourceRefreshWeeklyScheduleDaysOfWeekEnum {
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
 * A weekly schedule for data to refresh on specific days in a given time interval.
**/
export declare class DataSourceRefreshWeeklySchedule extends SpeakeasyBase {
    daysOfWeek?: DataSourceRefreshWeeklyScheduleDaysOfWeekEnum[];
    startTime?: TimeOfDay;
}
