import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BucketByTimePeriodTypeEnum {
    Day = "day",
    Week = "week",
    Month = "month"
}
export declare class BucketByTimePeriod extends SpeakeasyBase {
    timeZoneId?: string;
    type?: BucketByTimePeriodTypeEnum;
    value?: number;
}
