package shared

import (
	"time"
)

// PricingSchedulePricingPeriod
// Pricing Period
type PricingSchedulePricingPeriod struct {
	EndDate         *time.Time `json:"endDate,omitempty"`
	PricingComment  *string    `json:"pricingComment,omitempty"`
	RateOrCostNanos *string    `json:"rateOrCostNanos,omitempty"`
	StartDate       *time.Time `json:"startDate,omitempty"`
	Units           *string    `json:"units,omitempty"`
}
