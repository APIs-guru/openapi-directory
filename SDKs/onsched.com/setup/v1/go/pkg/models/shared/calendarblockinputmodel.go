package shared

import (
	"time"
)

type CalendarBlockInputModel struct {
	AllDay    *bool      `json:"allDay,omitempty"`
	EndDate   *time.Time `json:"endDate,omitempty"`
	EndTime   *int32     `json:"endTime,omitempty"`
	Reason    *string    `json:"reason,omitempty"`
	Repeats   *bool      `json:"repeats,omitempty"`
	StartDate *time.Time `json:"startDate,omitempty"`
	StartTime *int32     `json:"startTime,omitempty"`
}
