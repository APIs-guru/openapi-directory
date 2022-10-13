package shared

import (
	"time"
)

type TimePeriod struct {
	End   *time.Time `json:"end"`
	Start *time.Time `json:"start"`
}
