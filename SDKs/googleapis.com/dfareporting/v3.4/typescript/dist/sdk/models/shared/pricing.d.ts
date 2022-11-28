import { SpeakeasyBase } from "../../../internal/utils";
import { Flight } from "./flight";
export declare enum PricingCapCostTypeEnum {
    PlanningPlacementCapCostTypeNone = "PLANNING_PLACEMENT_CAP_COST_TYPE_NONE",
    PlanningPlacementCapCostTypeMonthly = "PLANNING_PLACEMENT_CAP_COST_TYPE_MONTHLY",
    PlanningPlacementCapCostTypeCumulative = "PLANNING_PLACEMENT_CAP_COST_TYPE_CUMULATIVE"
}
export declare enum PricingGroupTypeEnum {
    PlanningPlacementGroupTypePackage = "PLANNING_PLACEMENT_GROUP_TYPE_PACKAGE",
    PlanningPlacementGroupTypeRoadblock = "PLANNING_PLACEMENT_GROUP_TYPE_ROADBLOCK"
}
export declare enum PricingPricingTypeEnum {
    PlanningPlacementPricingTypeImpressions = "PLANNING_PLACEMENT_PRICING_TYPE_IMPRESSIONS",
    PlanningPlacementPricingTypeCpm = "PLANNING_PLACEMENT_PRICING_TYPE_CPM",
    PlanningPlacementPricingTypeClicks = "PLANNING_PLACEMENT_PRICING_TYPE_CLICKS",
    PlanningPlacementPricingTypeCpc = "PLANNING_PLACEMENT_PRICING_TYPE_CPC",
    PlanningPlacementPricingTypeCpa = "PLANNING_PLACEMENT_PRICING_TYPE_CPA",
    PlanningPlacementPricingTypeFlatRateImpressions = "PLANNING_PLACEMENT_PRICING_TYPE_FLAT_RATE_IMPRESSIONS",
    PlanningPlacementPricingTypeFlatRateClicks = "PLANNING_PLACEMENT_PRICING_TYPE_FLAT_RATE_CLICKS",
    PlanningPlacementPricingTypeCpmActiveview = "PLANNING_PLACEMENT_PRICING_TYPE_CPM_ACTIVEVIEW"
}
/**
 * Pricing Information
**/
export declare class Pricing extends SpeakeasyBase {
    capCostType?: PricingCapCostTypeEnum;
    endDate?: Date;
    flights?: Flight[];
    groupType?: PricingGroupTypeEnum;
    pricingType?: PricingPricingTypeEnum;
    startDate?: Date;
}
