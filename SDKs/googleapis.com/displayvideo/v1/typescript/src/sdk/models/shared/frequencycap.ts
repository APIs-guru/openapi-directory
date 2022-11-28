import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FrequencyCapTimeUnitEnum {
    TimeUnitUnspecified = "TIME_UNIT_UNSPECIFIED",
    TimeUnitLifetime = "TIME_UNIT_LIFETIME",
    TimeUnitMonths = "TIME_UNIT_MONTHS",
    TimeUnitWeeks = "TIME_UNIT_WEEKS",
    TimeUnitDays = "TIME_UNIT_DAYS",
    TimeUnitHours = "TIME_UNIT_HOURS",
    TimeUnitMinutes = "TIME_UNIT_MINUTES"
}


// FrequencyCap
/** 
 * Settings that control the number of times a user may be shown with the same ad during a given time period.
**/
export class FrequencyCap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxImpressions" })
  maxImpressions?: number;

  @SpeakeasyMetadata({ data: "json, name=timeUnit" })
  timeUnit?: FrequencyCapTimeUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=timeUnitCount" })
  timeUnitCount?: number;

  @SpeakeasyMetadata({ data: "json, name=unlimited" })
  unlimited?: boolean;
}
