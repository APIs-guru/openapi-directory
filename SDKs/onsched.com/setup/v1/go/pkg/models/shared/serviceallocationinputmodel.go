package shared

import (
	"time"
)

type ServiceAllocationInputModel struct {
	AllDay       *bool      `json:"allDay"`
	BookingLimit *int32     `json:"bookingLimit"`
	EndDate      *time.Time `json:"endDate"`
	EndTime      *int32     `json:"endTime"`
	LocationID   *string    `json:"locationId"`
	Reason       *string    `json:"reason"`
	Repeats      *bool      `json:"repeats"`
	ResourceID   *string    `json:"resourceId"`
	StartDate    *time.Time `json:"startDate"`
	StartTime    *int32     `json:"startTime"`
}
