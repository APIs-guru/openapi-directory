package shared

import (
	"time"
)

type CancellationPolicy struct {
	ChargedUntil   time.Time `json:"charged_until"`
	DecommissionAt time.Time `json:"decommission_at"`
}
