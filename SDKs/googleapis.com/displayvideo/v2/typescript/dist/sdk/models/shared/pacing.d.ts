import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PacingPacingPeriodEnum {
    PacingPeriodUnspecified = "PACING_PERIOD_UNSPECIFIED",
    PacingPeriodDaily = "PACING_PERIOD_DAILY",
    PacingPeriodFlight = "PACING_PERIOD_FLIGHT"
}
export declare enum PacingPacingTypeEnum {
    PacingTypeUnspecified = "PACING_TYPE_UNSPECIFIED",
    PacingTypeAhead = "PACING_TYPE_AHEAD",
    PacingTypeAsap = "PACING_TYPE_ASAP",
    PacingTypeEven = "PACING_TYPE_EVEN"
}
/**
 * Settings that control the rate at which a budget is spent.
**/
export declare class Pacing extends SpeakeasyBase {
    dailyMaxImpressions?: string;
    dailyMaxMicros?: string;
    pacingPeriod?: PacingPacingPeriodEnum;
    pacingType?: PacingPacingTypeEnum;
}
