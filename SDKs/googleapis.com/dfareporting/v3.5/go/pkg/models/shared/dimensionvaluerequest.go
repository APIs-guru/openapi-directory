package shared

import (
	"time"
)

type DimensionValueRequest struct {
	DimensionName *string           `json:"dimensionName,omitempty"`
	EndDate       *time.Time        `json:"endDate,omitempty"`
	Filters       []DimensionFilter `json:"filters,omitempty"`
	Kind          *string           `json:"kind,omitempty"`
	StartDate     *time.Time        `json:"startDate,omitempty"`
}
