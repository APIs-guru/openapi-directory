import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PricingSchedulePricingPeriod } from "./pricingschedulepricingperiod";

export enum PricingScheduleCapCostOptionEnum {
    CapCostNone = "CAP_COST_NONE"
,    CapCostMonthly = "CAP_COST_MONTHLY"
,    CapCostCumulative = "CAP_COST_CUMULATIVE"
}

export enum PricingSchedulePricingTypeEnum {
    PricingTypeCpm = "PRICING_TYPE_CPM"
,    PricingTypeCpc = "PRICING_TYPE_CPC"
,    PricingTypeCpa = "PRICING_TYPE_CPA"
,    PricingTypeFlatRateImpressions = "PRICING_TYPE_FLAT_RATE_IMPRESSIONS"
,    PricingTypeFlatRateClicks = "PRICING_TYPE_FLAT_RATE_CLICKS"
,    PricingTypeCpmActiveview = "PRICING_TYPE_CPM_ACTIVEVIEW"
}


// PricingSchedule
/** 
 * Pricing Schedule
**/
export class PricingSchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=capCostOption" })
  capCostOption?: PricingScheduleCapCostOptionEnum;

  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=flighted" })
  flighted?: boolean;

  @Metadata({ data: "json, name=floodlightActivityId" })
  floodlightActivityId?: string;

  @Metadata({ data: "json, name=pricingPeriods", elemType: shared.PricingSchedulePricingPeriod })
  pricingPeriods?: PricingSchedulePricingPeriod[];

  @Metadata({ data: "json, name=pricingType" })
  pricingType?: PricingSchedulePricingTypeEnum;

  @Metadata({ data: "json, name=startDate" })
  startDate?: Date;

  @Metadata({ data: "json, name=testingStartDate" })
  testingStartDate?: Date;
}
