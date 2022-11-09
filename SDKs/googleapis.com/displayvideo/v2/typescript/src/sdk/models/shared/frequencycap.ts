import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FrequencyCapTimeUnitEnum {
    TimeUnitUnspecified = "TIME_UNIT_UNSPECIFIED"
,    TimeUnitLifetime = "TIME_UNIT_LIFETIME"
,    TimeUnitMonths = "TIME_UNIT_MONTHS"
,    TimeUnitWeeks = "TIME_UNIT_WEEKS"
,    TimeUnitDays = "TIME_UNIT_DAYS"
,    TimeUnitHours = "TIME_UNIT_HOURS"
,    TimeUnitMinutes = "TIME_UNIT_MINUTES"
}


// FrequencyCap
/** 
 * Settings that control the number of times a user may be shown with the same ad during a given time period.
**/
export class FrequencyCap extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxImpressions" })
  maxImpressions?: number;

  @Metadata({ data: "json, name=maxViews" })
  maxViews?: number;

  @Metadata({ data: "json, name=timeUnit" })
  timeUnit?: FrequencyCapTimeUnitEnum;

  @Metadata({ data: "json, name=timeUnitCount" })
  timeUnitCount?: number;

  @Metadata({ data: "json, name=unlimited" })
  unlimited?: boolean;
}
