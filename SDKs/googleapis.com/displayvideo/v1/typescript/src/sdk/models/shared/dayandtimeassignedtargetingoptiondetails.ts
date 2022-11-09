import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum {
    DayOfWeekUnspecified = "DAY_OF_WEEK_UNSPECIFIED"
,    Monday = "MONDAY"
,    Tuesday = "TUESDAY"
,    Wednesday = "WEDNESDAY"
,    Thursday = "THURSDAY"
,    Friday = "FRIDAY"
,    Saturday = "SATURDAY"
,    Sunday = "SUNDAY"
}

export enum DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum {
    TimeZoneResolutionUnspecified = "TIME_ZONE_RESOLUTION_UNSPECIFIED"
,    TimeZoneResolutionEndUser = "TIME_ZONE_RESOLUTION_END_USER"
,    TimeZoneResolutionAdvertiser = "TIME_ZONE_RESOLUTION_ADVERTISER"
}


// DayAndTimeAssignedTargetingOptionDetails
/** 
 * Representation of a segment of time defined on a specific day of the week and with a start and end time. The time represented by `start_hour` must be before the time represented by `end_hour`.
**/
export class DayAndTimeAssignedTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=dayOfWeek" })
  dayOfWeek?: DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum;

  @Metadata({ data: "json, name=endHour" })
  endHour?: number;

  @Metadata({ data: "json, name=startHour" })
  startHour?: number;

  @Metadata({ data: "json, name=timeZoneResolution" })
  timeZoneResolution?: DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum;
}
