import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DayPartTargetingDaysOfWeekEnum {
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY",
    Sunday = "SUNDAY"
}


// DayPartTargeting
/** 
 * Day Part Targeting.
**/
export class DayPartTargeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=daysOfWeek" })
  daysOfWeek?: DayPartTargetingDaysOfWeekEnum[];

  @SpeakeasyMetadata({ data: "json, name=hoursOfDay" })
  hoursOfDay?: number[];

  @SpeakeasyMetadata({ data: "json, name=userLocalTime" })
  userLocalTime?: boolean;
}
