package shared

import (
	"time"
)

type DimensionValueRequest struct {
	DimensionName *string           `json:"dimensionName"`
	EndDate       *time.Time        `json:"endDate"`
	Filters       []DimensionFilter `json:"filters"`
	Kind          *string           `json:"kind"`
	StartDate     *time.Time        `json:"startDate"`
}
