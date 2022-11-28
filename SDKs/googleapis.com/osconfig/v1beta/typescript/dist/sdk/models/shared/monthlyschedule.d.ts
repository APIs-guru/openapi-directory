import { SpeakeasyBase } from "../../../internal/utils";
import { WeekDayOfMonth } from "./weekdayofmonth";
/**
 * Represents a monthly schedule. An example of a valid monthly schedule is "on the third Tuesday of the month" or "on the 15th of the month".
**/
export declare class MonthlySchedule extends SpeakeasyBase {
    monthDay?: number;
    weekDayOfMonth?: WeekDayOfMonth;
}
