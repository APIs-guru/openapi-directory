import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeOfDay } from "./timeofday";


export enum TimePeriodCloseDayEnum {
    DayOfWeekUnspecified = "DAY_OF_WEEK_UNSPECIFIED",
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY",
    Sunday = "SUNDAY"
}

export enum TimePeriodOpenDayEnum {
    DayOfWeekUnspecified = "DAY_OF_WEEK_UNSPECIFIED",
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY",
    Sunday = "SUNDAY"
}


// TimePeriod
/** 
 * Represents a span of time that the business is open, starting on the specified open day/time and closing on the specified close day/time. The closing time must occur after the opening time, for example later in the same day, or on a subsequent day.
**/
export class TimePeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=closeDay" })
  closeDay?: TimePeriodCloseDayEnum;

  @SpeakeasyMetadata({ data: "json, name=closeTime" })
  closeTime?: TimeOfDay;

  @SpeakeasyMetadata({ data: "json, name=openDay" })
  openDay?: TimePeriodOpenDayEnum;

  @SpeakeasyMetadata({ data: "json, name=openTime" })
  openTime?: TimeOfDay;
}
