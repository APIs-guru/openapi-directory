import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DayPartTargetingDaysOfWeekEnum {
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY",
    Sunday = "SUNDAY"
}
/**
 * Day Part Targeting.
**/
export declare class DayPartTargeting extends SpeakeasyBase {
    daysOfWeek?: DayPartTargetingDaysOfWeekEnum[];
    hoursOfDay?: number[];
    userLocalTime?: boolean;
}
