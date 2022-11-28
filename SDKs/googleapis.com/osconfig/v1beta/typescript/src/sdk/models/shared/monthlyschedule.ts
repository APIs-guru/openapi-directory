import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WeekDayOfMonth } from "./weekdayofmonth";



// MonthlySchedule
/** 
 * Represents a monthly schedule. An example of a valid monthly schedule is "on the third Tuesday of the month" or "on the 15th of the month".
**/
export class MonthlySchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=monthDay" })
  monthDay?: number;

  @SpeakeasyMetadata({ data: "json, name=weekDayOfMonth" })
  weekDayOfMonth?: WeekDayOfMonth;
}
