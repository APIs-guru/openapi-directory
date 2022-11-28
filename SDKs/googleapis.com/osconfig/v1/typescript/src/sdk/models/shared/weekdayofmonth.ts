import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WeekDayOfMonthDayOfWeekEnum {
    DayOfWeekUnspecified = "DAY_OF_WEEK_UNSPECIFIED",
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY",
    Sunday = "SUNDAY"
}


// WeekDayOfMonth
/** 
 * Represents one week day in a month. An example is "the 4th Sunday".
**/
export class WeekDayOfMonth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dayOfWeek" })
  dayOfWeek?: WeekDayOfMonthDayOfWeekEnum;

  @SpeakeasyMetadata({ data: "json, name=dayOffset" })
  dayOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=weekOrdinal" })
  weekOrdinal?: number;
}
