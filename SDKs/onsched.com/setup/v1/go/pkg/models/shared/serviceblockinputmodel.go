package shared

import (
	"time"
)

type ServiceBlockInputModel struct {
	EndDate    *time.Time        `json:"endDate"`
	EndTime    *int32            `json:"endTime"`
	LocationID *string           `json:"locationId"`
	Reason     *string           `json:"reason"`
	Repeat     *RepeatInputModel `json:"repeat"`
	Repeats    *bool             `json:"repeats"`
	StartDate  *time.Time        `json:"startDate"`
	StartTime  *int32            `json:"startTime"`
}
