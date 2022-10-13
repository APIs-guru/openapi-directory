package shared

import (
	"time"
)

type Flight struct {
	EndDate    *time.Time `json:"endDate"`
	RateOrCost *string    `json:"rateOrCost"`
	StartDate  *time.Time `json:"startDate"`
	Units      *string    `json:"units"`
}
