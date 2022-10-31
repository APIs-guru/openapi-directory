package shared

import (
	"time"
)

type TimePeriod struct {
	End   *time.Time `json:"end,omitempty"`
	Start *time.Time `json:"start,omitempty"`
}
