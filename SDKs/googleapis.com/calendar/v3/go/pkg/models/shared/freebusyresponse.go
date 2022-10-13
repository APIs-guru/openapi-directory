package shared

import (
	"time"
)

type FreeBusyResponse struct {
	Calendars map[string]FreeBusyCalendar `json:"calendars"`
	Groups    map[string]FreeBusyGroup    `json:"groups"`
	Kind      *string                     `json:"kind"`
	TimeMax   *time.Time                  `json:"timeMax"`
	TimeMin   *time.Time                  `json:"timeMin"`
}
