package shared

import (
	"time"
)

type CancellationRequest struct {
	DecommissionAt *time.Time `json:"decommission_at"`
}
