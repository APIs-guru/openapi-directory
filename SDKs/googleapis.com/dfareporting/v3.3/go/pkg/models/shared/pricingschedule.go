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
	CapCostOption         *PricingScheduleCapCostOptionEnum `json:"capCostOption,omitempty"`
	DisregardOverdelivery *bool                             `json:"disregardOverdelivery,omitempty"`
	EndDate               *time.Time                        `json:"endDate,omitempty"`
	Flighted              *bool                             `json:"flighted,omitempty"`
	FloodlightActivityID  *string                           `json:"floodlightActivityId,omitempty"`
	PricingPeriods        []PricingSchedulePricingPeriod    `json:"pricingPeriods,omitempty"`
	PricingType           *PricingSchedulePricingTypeEnum   `json:"pricingType,omitempty"`
	StartDate             *time.Time                        `json:"startDate,omitempty"`
	TestingStartDate      *time.Time                        `json:"testingStartDate,omitempty"`
}
