import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudChannelV1PeriodPeriodTypeEnum {
    PeriodTypeUnspecified = "PERIOD_TYPE_UNSPECIFIED",
    Day = "DAY",
    Month = "MONTH",
    Year = "YEAR"
}
/**
 * Represents period in days/months/years.
**/
export declare class GoogleCloudChannelV1Period extends SpeakeasyBase {
    duration?: number;
    periodType?: GoogleCloudChannelV1PeriodPeriodTypeEnum;
}
