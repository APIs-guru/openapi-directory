package shared

import (
	"time"
)

type Flight struct {
	EndDate    *time.Time `json:"endDate,omitempty"`
	RateOrCost *string    `json:"rateOrCost,omitempty"`
	StartDate  *time.Time `json:"startDate,omitempty"`
	Units      *string    `json:"units,omitempty"`
}
