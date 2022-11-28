import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PricingSchedulePricingPeriod } from "./pricingschedulepricingperiod";


export enum PricingScheduleCapCostOptionEnum {
    CapCostNone = "CAP_COST_NONE",
    CapCostMonthly = "CAP_COST_MONTHLY",
    CapCostCumulative = "CAP_COST_CUMULATIVE"
}

export enum PricingSchedulePricingTypeEnum {
    PricingTypeCpm = "PRICING_TYPE_CPM",
    PricingTypeCpc = "PRICING_TYPE_CPC",
    PricingTypeCpa = "PRICING_TYPE_CPA",
    PricingTypeFlatRateImpressions = "PRICING_TYPE_FLAT_RATE_IMPRESSIONS",
    PricingTypeFlatRateClicks = "PRICING_TYPE_FLAT_RATE_CLICKS",
    PricingTypeCpmActiveview = "PRICING_TYPE_CPM_ACTIVEVIEW"
}


// PricingSchedule
/** 
 * Pricing Schedule
**/
export class PricingSchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capCostOption" })
  capCostOption?: PricingScheduleCapCostOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=flighted" })
  flighted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=floodlightActivityId" })
  floodlightActivityId?: string;

  @SpeakeasyMetadata({ data: "json, name=pricingPeriods", elemType: PricingSchedulePricingPeriod })
  pricingPeriods?: PricingSchedulePricingPeriod[];

  @SpeakeasyMetadata({ data: "json, name=pricingType" })
  pricingType?: PricingSchedulePricingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=testingStartDate" })
  testingStartDate?: Date;
}
