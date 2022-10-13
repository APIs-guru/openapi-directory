package shared

import (
	"time"
)

type ServiceBlockUpdateModel struct {
	EndDate   *time.Time         `json:"endDate"`
	EndTime   *int32             `json:"endTime"`
	Reason    *string            `json:"reason"`
	Repeat    *RepeatUpdateModel `json:"repeat"`
	Repeats   *bool              `json:"repeats"`
	StartDate *time.Time         `json:"startDate"`
	StartTime *int32             `json:"startTime"`
}
