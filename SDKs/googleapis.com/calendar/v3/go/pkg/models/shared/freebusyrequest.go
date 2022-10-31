package shared

import (
	"time"
)

type FreeBusyRequest struct {
	CalendarExpansionMax *int32                `json:"calendarExpansionMax,omitempty"`
	GroupExpansionMax    *int32                `json:"groupExpansionMax,omitempty"`
	Items                []FreeBusyRequestItem `json:"items,omitempty"`
	TimeMax              *time.Time            `json:"timeMax,omitempty"`
	TimeMin              *time.Time            `json:"timeMin,omitempty"`
	TimeZone             *string               `json:"timeZone,omitempty"`
}
