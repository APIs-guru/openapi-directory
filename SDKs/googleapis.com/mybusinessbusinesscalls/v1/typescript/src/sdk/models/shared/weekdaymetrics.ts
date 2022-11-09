import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WeekDayMetricsDayEnum {
    DayOfWeekUnspecified = "DAY_OF_WEEK_UNSPECIFIED"
,    Monday = "MONDAY"
,    Tuesday = "TUESDAY"
,    Wednesday = "WEDNESDAY"
,    Thursday = "THURSDAY"
,    Friday = "FRIDAY"
,    Saturday = "SATURDAY"
,    Sunday = "SUNDAY"
}


// WeekDayMetrics
/** 
 * Metrics for a week day.
**/
export class WeekDayMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=day" })
  day?: WeekDayMetricsDayEnum;

  @Metadata({ data: "json, name=missedCallsCount" })
  missedCallsCount?: number;
}
