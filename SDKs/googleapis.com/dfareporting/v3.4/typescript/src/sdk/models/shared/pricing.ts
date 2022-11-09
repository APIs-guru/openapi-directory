import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Flight } from "./flight";

export enum PricingCapCostTypeEnum {
    PlanningPlacementCapCostTypeNone = "PLANNING_PLACEMENT_CAP_COST_TYPE_NONE"
,    PlanningPlacementCapCostTypeMonthly = "PLANNING_PLACEMENT_CAP_COST_TYPE_MONTHLY"
,    PlanningPlacementCapCostTypeCumulative = "PLANNING_PLACEMENT_CAP_COST_TYPE_CUMULATIVE"
}

export enum PricingGroupTypeEnum {
    PlanningPlacementGroupTypePackage = "PLANNING_PLACEMENT_GROUP_TYPE_PACKAGE"
,    PlanningPlacementGroupTypeRoadblock = "PLANNING_PLACEMENT_GROUP_TYPE_ROADBLOCK"
}

export enum PricingPricingTypeEnum {
    PlanningPlacementPricingTypeImpressions = "PLANNING_PLACEMENT_PRICING_TYPE_IMPRESSIONS"
,    PlanningPlacementPricingTypeCpm = "PLANNING_PLACEMENT_PRICING_TYPE_CPM"
,    PlanningPlacementPricingTypeClicks = "PLANNING_PLACEMENT_PRICING_TYPE_CLICKS"
,    PlanningPlacementPricingTypeCpc = "PLANNING_PLACEMENT_PRICING_TYPE_CPC"
,    PlanningPlacementPricingTypeCpa = "PLANNING_PLACEMENT_PRICING_TYPE_CPA"
,    PlanningPlacementPricingTypeFlatRateImpressions = "PLANNING_PLACEMENT_PRICING_TYPE_FLAT_RATE_IMPRESSIONS"
,    PlanningPlacementPricingTypeFlatRateClicks = "PLANNING_PLACEMENT_PRICING_TYPE_FLAT_RATE_CLICKS"
,    PlanningPlacementPricingTypeCpmActiveview = "PLANNING_PLACEMENT_PRICING_TYPE_CPM_ACTIVEVIEW"
}


// Pricing
/** 
 * Pricing Information
**/
export class Pricing extends SpeakeasyBase {
  @Metadata({ data: "json, name=capCostType" })
  capCostType?: PricingCapCostTypeEnum;

  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=flights", elemType: shared.Flight })
  flights?: Flight[];

  @Metadata({ data: "json, name=groupType" })
  groupType?: PricingGroupTypeEnum;

  @Metadata({ data: "json, name=pricingType" })
  pricingType?: PricingPricingTypeEnum;

  @Metadata({ data: "json, name=startDate" })
  startDate?: Date;
}
