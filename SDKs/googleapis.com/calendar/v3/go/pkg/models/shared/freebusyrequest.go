package shared

import (
	"time"
)

type FreeBusyRequest struct {
	CalendarExpansionMax *int32                `json:"calendarExpansionMax"`
	GroupExpansionMax    *int32                `json:"groupExpansionMax"`
	Items                []FreeBusyRequestItem `json:"items"`
	TimeMax              *time.Time            `json:"timeMax"`
	TimeMin              *time.Time            `json:"timeMin"`
	TimeZone             *string               `json:"timeZone"`
}
