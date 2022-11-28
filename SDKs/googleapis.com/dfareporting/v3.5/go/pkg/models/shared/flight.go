package shared

import (
	"time"
)

// Flight
// Flight
type Flight struct {
	EndDate    *time.Time `json:"endDate,omitempty"`
	RateOrCost *string    `json:"rateOrCost,omitempty"`
	StartDate  *time.Time `json:"startDate,omitempty"`
	Units      *string    `json:"units,omitempty"`
}
