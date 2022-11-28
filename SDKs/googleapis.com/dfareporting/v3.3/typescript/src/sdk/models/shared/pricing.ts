import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Flight } from "./flight";


export enum PricingCapCostTypeEnum {
    PlanningPlacementCapCostTypeNone = "PLANNING_PLACEMENT_CAP_COST_TYPE_NONE",
    PlanningPlacementCapCostTypeMonthly = "PLANNING_PLACEMENT_CAP_COST_TYPE_MONTHLY",
    PlanningPlacementCapCostTypeCumulative = "PLANNING_PLACEMENT_CAP_COST_TYPE_CUMULATIVE"
}

export enum PricingGroupTypeEnum {
    PlanningPlacementGroupTypePackage = "PLANNING_PLACEMENT_GROUP_TYPE_PACKAGE",
    PlanningPlacementGroupTypeRoadblock = "PLANNING_PLACEMENT_GROUP_TYPE_ROADBLOCK"
}

export enum PricingPricingTypeEnum {
    PlanningPlacementPricingTypeImpressions = "PLANNING_PLACEMENT_PRICING_TYPE_IMPRESSIONS",
    PlanningPlacementPricingTypeCpm = "PLANNING_PLACEMENT_PRICING_TYPE_CPM",
    PlanningPlacementPricingTypeClicks = "PLANNING_PLACEMENT_PRICING_TYPE_CLICKS",
    PlanningPlacementPricingTypeCpc = "PLANNING_PLACEMENT_PRICING_TYPE_CPC",
    PlanningPlacementPricingTypeCpa = "PLANNING_PLACEMENT_PRICING_TYPE_CPA",
    PlanningPlacementPricingTypeFlatRateImpressions = "PLANNING_PLACEMENT_PRICING_TYPE_FLAT_RATE_IMPRESSIONS",
    PlanningPlacementPricingTypeFlatRateClicks = "PLANNING_PLACEMENT_PRICING_TYPE_FLAT_RATE_CLICKS",
    PlanningPlacementPricingTypeCpmActiveview = "PLANNING_PLACEMENT_PRICING_TYPE_CPM_ACTIVEVIEW"
}


// Pricing
/** 
 * Pricing Information
**/
export class Pricing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capCostType" })
  capCostType?: PricingCapCostTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=flights", elemType: Flight })
  flights?: Flight[];

  @SpeakeasyMetadata({ data: "json, name=groupType" })
  groupType?: PricingGroupTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=pricingType" })
  pricingType?: PricingPricingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;
}
