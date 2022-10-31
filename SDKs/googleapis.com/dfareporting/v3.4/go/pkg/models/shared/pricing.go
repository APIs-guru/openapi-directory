package shared

import (
"time")


type PricingCapCostTypeEnum string

const (
    PricingCapCostTypeEnumPlanningPlacementCapCostTypeNone PricingCapCostTypeEnum = "PLANNING_PLACEMENT_CAP_COST_TYPE_NONE"
PricingCapCostTypeEnumPlanningPlacementCapCostTypeMonthly PricingCapCostTypeEnum = "PLANNING_PLACEMENT_CAP_COST_TYPE_MONTHLY"
PricingCapCostTypeEnumPlanningPlacementCapCostTypeCumulative PricingCapCostTypeEnum = "PLANNING_PLACEMENT_CAP_COST_TYPE_CUMULATIVE"
)



type PricingGroupTypeEnum string

const (
    PricingGroupTypeEnumPlanningPlacementGroupTypePackage PricingGroupTypeEnum = "PLANNING_PLACEMENT_GROUP_TYPE_PACKAGE"
PricingGroupTypeEnumPlanningPlacementGroupTypeRoadblock PricingGroupTypeEnum = "PLANNING_PLACEMENT_GROUP_TYPE_ROADBLOCK"
)



type PricingPricingTypeEnum string

const (
    PricingPricingTypeEnumPlanningPlacementPricingTypeImpressions PricingPricingTypeEnum = "PLANNING_PLACEMENT_PRICING_TYPE_IMPRESSIONS"
PricingPricingTypeEnumPlanningPlacementPricingTypeCpm PricingPricingTypeEnum = "PLANNING_PLACEMENT_PRICING_TYPE_CPM"
PricingPricingTypeEnumPlanningPlacementPricingTypeClicks PricingPricingTypeEnum = "PLANNING_PLACEMENT_PRICING_TYPE_CLICKS"
PricingPricingTypeEnumPlanningPlacementPricingTypeCpc PricingPricingTypeEnum = "PLANNING_PLACEMENT_PRICING_TYPE_CPC"
PricingPricingTypeEnumPlanningPlacementPricingTypeCpa PricingPricingTypeEnum = "PLANNING_PLACEMENT_PRICING_TYPE_CPA"
PricingPricingTypeEnumPlanningPlacementPricingTypeFlatRateImpressions PricingPricingTypeEnum = "PLANNING_PLACEMENT_PRICING_TYPE_FLAT_RATE_IMPRESSIONS"
PricingPricingTypeEnumPlanningPlacementPricingTypeFlatRateClicks PricingPricingTypeEnum = "PLANNING_PLACEMENT_PRICING_TYPE_FLAT_RATE_CLICKS"
PricingPricingTypeEnumPlanningPlacementPricingTypeCpmActiveview PricingPricingTypeEnum = "PLANNING_PLACEMENT_PRICING_TYPE_CPM_ACTIVEVIEW"
)


type Pricing struct {
    CapCostType *PricingCapCostTypeEnum `json:"capCostType,omitempty"`
    EndDate *time.Time `json:"endDate,omitempty"`
    Flights []Flight `json:"flights,omitempty"`
    GroupType *PricingGroupTypeEnum `json:"groupType,omitempty"`
    PricingType *PricingPricingTypeEnum `json:"pricingType,omitempty"`
    StartDate *time.Time `json:"startDate,omitempty"`
    
}

