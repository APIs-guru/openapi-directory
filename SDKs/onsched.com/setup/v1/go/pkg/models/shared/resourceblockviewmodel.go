package shared

import (
	"time"
)

type ResourceBlockViewModel struct {
	BusinessID *int32           `json:"businessId"`
	EndDate    *time.Time       `json:"endDate"`
	EndTime    *int32           `json:"endTime"`
	ID         *int32           `json:"id"`
	ObjectName *string          `json:"objectName"`
	Reason     *string          `json:"reason"`
	Repeat     *RepeatViewModel `json:"repeat"`
	Repeats    *bool            `json:"repeats"`
	ResourceID *int32           `json:"resourceId"`
	StartDate  *time.Time       `json:"startDate"`
	StartTime  *int32           `json:"startTime"`
}
