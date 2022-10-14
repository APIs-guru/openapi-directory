package shared

import (
	"time"
)

type FreeBusyResponse struct {
	Calendars map[string]FreeBusyCalendar `json:"calendars,omitempty"`
	Groups    map[string]FreeBusyGroup    `json:"groups,omitempty"`
	Kind      *string                     `json:"kind,omitempty"`
	TimeMax   *time.Time                  `json:"timeMax,omitempty"`
	TimeMin   *time.Time                  `json:"timeMin,omitempty"`
}
