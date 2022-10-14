package shared

import (
	"time"
)

type ServiceBlockInputModel struct {
	EndDate    *time.Time        `json:"endDate,omitempty"`
	EndTime    *int32            `json:"endTime,omitempty"`
	LocationID *string           `json:"locationId,omitempty"`
	Reason     *string           `json:"reason,omitempty"`
	Repeat     *RepeatInputModel `json:"repeat,omitempty"`
	Repeats    *bool             `json:"repeats,omitempty"`
	StartDate  *time.Time        `json:"startDate,omitempty"`
	StartTime  *int32            `json:"startTime,omitempty"`
}
