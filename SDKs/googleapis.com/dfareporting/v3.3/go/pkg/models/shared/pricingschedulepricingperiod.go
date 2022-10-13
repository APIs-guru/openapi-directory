package shared

import (
	"time"
)

type PricingSchedulePricingPeriod struct {
	EndDate         *time.Time `json:"endDate"`
	PricingComment  *string    `json:"pricingComment"`
	RateOrCostNanos *string    `json:"rateOrCostNanos"`
	StartDate       *time.Time `json:"startDate"`
	Units           *string    `json:"units"`
}
