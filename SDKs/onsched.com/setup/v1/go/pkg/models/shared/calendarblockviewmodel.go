package shared

import (
	"time"
)

type CalendarBlockViewModel struct {
	CalendarID *string          `json:"calendarId"`
	EndDate    *time.Time       `json:"endDate"`
	EndTime    *int32           `json:"endTime"`
	ID         *string          `json:"id"`
	LocationID *string          `json:"locationId"`
	ObjectName *string          `json:"objectName"`
	Reason     *string          `json:"reason"`
	Repeat     *RepeatViewModel `json:"repeat"`
	Repeats    *bool            `json:"repeats"`
	StartDate  *time.Time       `json:"startDate"`
	StartTime  *int32           `json:"startTime"`
}
