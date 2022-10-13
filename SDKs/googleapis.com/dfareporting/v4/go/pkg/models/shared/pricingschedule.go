package shared

import (
	"time"
)

type PricingScheduleCapCostOptionEnum string

const (
	PricingScheduleCapCostOptionEnumCapCostNone       PricingScheduleCapCostOptionEnum = "CAP_COST_NONE"
	PricingScheduleCapCostOptionEnumCapCostMonthly    PricingScheduleCapCostOptionEnum = "CAP_COST_MONTHLY"
	PricingScheduleCapCostOptionEnumCapCostCumulative PricingScheduleCapCostOptionEnum = "CAP_COST_CUMULATIVE"
)

type PricingSchedulePricingTypeEnum string

const (
	PricingSchedulePricingTypeEnumPricingTypeCpm                 PricingSchedulePricingTypeEnum = "PRICING_TYPE_CPM"
	PricingSchedulePricingTypeEnumPricingTypeCpc                 PricingSchedulePricingTypeEnum = "PRICING_TYPE_CPC"
	PricingSchedulePricingTypeEnumPricingTypeCpa                 PricingSchedulePricingTypeEnum = "PRICING_TYPE_CPA"
	PricingSchedulePricingTypeEnumPricingTypeFlatRateImpressions PricingSchedulePricingTypeEnum = "PRICING_TYPE_FLAT_RATE_IMPRESSIONS"
	PricingSchedulePricingTypeEnumPricingTypeFlatRateClicks      PricingSchedulePricingTypeEnum = "PRICING_TYPE_FLAT_RATE_CLICKS"
	PricingSchedulePricingTypeEnumPricingTypeCpmActiveview       PricingSchedulePricingTypeEnum = "PRICING_TYPE_CPM_ACTIVEVIEW"
)

type PricingSchedule struct {
	CapCostOption        *PricingScheduleCapCostOptionEnum `json:"capCostOption"`
	EndDate              *time.Time                        `json:"endDate"`
	Flighted             *bool                             `json:"flighted"`
	FloodlightActivityID *string                           `json:"floodlightActivityId"`
	PricingPeriods       []PricingSchedulePricingPeriod    `json:"pricingPeriods"`
	PricingType          *PricingSchedulePricingTypeEnum   `json:"pricingType"`
	StartDate            *time.Time                        `json:"startDate"`
	TestingStartDate     *time.Time                        `json:"testingStartDate"`
}
