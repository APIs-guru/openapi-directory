package shared

import (
	"time"
)

type ResourceAllocationViewModel struct {
	BusinessID *int32           `json:"businessId,omitempty"`
	EndDate    *time.Time       `json:"endDate,omitempty"`
	EndTime    *int32           `json:"endTime,omitempty"`
	ID         *int32           `json:"id,omitempty"`
	ObjectName *string          `json:"objectName,omitempty"`
	Reason     *string          `json:"reason,omitempty"`
	Repeat     *RepeatViewModel `json:"repeat,omitempty"`
	Repeats    *bool            `json:"repeats,omitempty"`
	ResourceID *int32           `json:"resourceId,omitempty"`
	StartDate  *time.Time       `json:"startDate,omitempty"`
	StartTime  *int32           `json:"startTime,omitempty"`
}
