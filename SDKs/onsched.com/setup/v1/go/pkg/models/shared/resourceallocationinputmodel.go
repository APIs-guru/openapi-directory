package shared

import (
	"time"
)

type ResourceAllocationInputModel struct {
	AllDay    *bool      `json:"allDay"`
	EndDate   *time.Time `json:"endDate"`
	EndTime   *int32     `json:"endTime"`
	Reason    *string    `json:"reason"`
	Repeats   *bool      `json:"repeats"`
	StartDate *time.Time `json:"startDate"`
	StartTime *int32     `json:"startTime"`
}
