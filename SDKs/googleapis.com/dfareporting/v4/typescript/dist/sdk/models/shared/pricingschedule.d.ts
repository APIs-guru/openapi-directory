import { SpeakeasyBase } from "../../../internal/utils";
import { PricingSchedulePricingPeriod } from "./pricingschedulepricingperiod";
export declare enum PricingScheduleCapCostOptionEnum {
    CapCostNone = "CAP_COST_NONE",
    CapCostMonthly = "CAP_COST_MONTHLY",
    CapCostCumulative = "CAP_COST_CUMULATIVE"
}
export declare enum PricingSchedulePricingTypeEnum {
    PricingTypeCpm = "PRICING_TYPE_CPM",
    PricingTypeCpc = "PRICING_TYPE_CPC",
    PricingTypeCpa = "PRICING_TYPE_CPA",
    PricingTypeFlatRateImpressions = "PRICING_TYPE_FLAT_RATE_IMPRESSIONS",
    PricingTypeFlatRateClicks = "PRICING_TYPE_FLAT_RATE_CLICKS",
    PricingTypeCpmActiveview = "PRICING_TYPE_CPM_ACTIVEVIEW"
}
/**
 * Pricing Schedule
**/
export declare class PricingSchedule extends SpeakeasyBase {
    capCostOption?: PricingScheduleCapCostOptionEnum;
    endDate?: Date;
    flighted?: boolean;
    floodlightActivityId?: string;
    pricingPeriods?: PricingSchedulePricingPeriod[];
    pricingType?: PricingSchedulePricingTypeEnum;
    startDate?: Date;
    testingStartDate?: Date;
}
