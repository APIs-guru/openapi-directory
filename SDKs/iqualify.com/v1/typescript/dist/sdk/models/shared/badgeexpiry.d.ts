import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BadgeExpiryExpiryTypeEnum {
    Date = "date",
    Timeframe = "timeframe"
}
export declare enum BadgeExpiryTimeframeUnitEnum {
    Days = "days",
    Months = "months",
    Years = "years"
}
export declare class BadgeExpiry extends SpeakeasyBase {
    expirationDate?: Date;
    expires?: boolean;
    expiryType?: BadgeExpiryExpiryTypeEnum;
    timeframeAmount?: number;
    timeframeUnit?: BadgeExpiryTimeframeUnitEnum;
}
