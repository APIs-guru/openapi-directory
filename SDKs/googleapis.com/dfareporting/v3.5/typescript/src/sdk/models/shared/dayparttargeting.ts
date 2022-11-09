import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DayPartTargetingDaysOfWeekEnum {
    Monday = "MONDAY"
,    Tuesday = "TUESDAY"
,    Wednesday = "WEDNESDAY"
,    Thursday = "THURSDAY"
,    Friday = "FRIDAY"
,    Saturday = "SATURDAY"
,    Sunday = "SUNDAY"
}


// DayPartTargeting
/** 
 * Day Part Targeting.
**/
export class DayPartTargeting extends SpeakeasyBase {
  @Metadata({ data: "json, name=daysOfWeek" })
  daysOfWeek?: DayPartTargetingDaysOfWeekEnum[];

  @Metadata({ data: "json, name=hoursOfDay" })
  hoursOfDay?: number[];

  @Metadata({ data: "json, name=userLocalTime" })
  userLocalTime?: boolean;
}
