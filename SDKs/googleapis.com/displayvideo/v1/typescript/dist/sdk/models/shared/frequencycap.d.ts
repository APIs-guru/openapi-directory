import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FrequencyCapTimeUnitEnum {
    TimeUnitUnspecified = "TIME_UNIT_UNSPECIFIED",
    TimeUnitLifetime = "TIME_UNIT_LIFETIME",
    TimeUnitMonths = "TIME_UNIT_MONTHS",
    TimeUnitWeeks = "TIME_UNIT_WEEKS",
    TimeUnitDays = "TIME_UNIT_DAYS",
    TimeUnitHours = "TIME_UNIT_HOURS",
    TimeUnitMinutes = "TIME_UNIT_MINUTES"
}
/**
 * Settings that control the number of times a user may be shown with the same ad during a given time period.
**/
export declare class FrequencyCap extends SpeakeasyBase {
    maxImpressions?: number;
    timeUnit?: FrequencyCapTimeUnitEnum;
    timeUnitCount?: number;
    unlimited?: boolean;
}
