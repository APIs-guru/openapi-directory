import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WeeklyScheduleDayOfWeekEnum {
    DayOfWeekUnspecified = "DAY_OF_WEEK_UNSPECIFIED",
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY",
    Sunday = "SUNDAY"
}


// WeeklySchedule
/** 
 * Represents a weekly schedule.
**/
export class WeeklySchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dayOfWeek" })
  dayOfWeek?: WeeklyScheduleDayOfWeekEnum;
}
