import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ThrottlingSettingsPeriodEnum {
    Secondly = "SECONDLY",
    RollingMinute = "ROLLING_MINUTE"
}
/**
 * Configuration details for webhook throttling.
**/
export declare class ThrottlingSettings extends SpeakeasyBase {
    maxConcurrentRequests: number;
    period: ThrottlingSettingsPeriodEnum;
}
