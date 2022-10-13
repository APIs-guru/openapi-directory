package shared

import (
	"time"
)

type ServiceBlockViewModel struct {
	DeletedStatus *bool            `json:"deletedStatus"`
	DeletedTime   *string          `json:"deletedTime"`
	EndDate       *time.Time       `json:"endDate"`
	EndTime       *int32           `json:"endTime"`
	ID            *string          `json:"id"`
	LocationID    *string          `json:"locationId"`
	ObjectName    *string          `json:"objectName"`
	Reason        *string          `json:"reason"`
	Repeat        *RepeatViewModel `json:"repeat"`
	Repeats       *bool            `json:"repeats"`
	ServiceID     *string          `json:"serviceId"`
	StartDate     *time.Time       `json:"startDate"`
	StartTime     *int32           `json:"startTime"`
}
