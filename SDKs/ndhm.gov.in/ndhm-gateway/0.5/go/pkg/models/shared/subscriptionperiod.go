package shared

import (
	"time"
)

type SubscriptionPeriod struct {
	From time.Time `json:"from"`
	To   time.Time `json:"to"`
}
