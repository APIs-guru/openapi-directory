package shared

import (
	"time"
)

// Payment
// Payment object response.
type Payment struct {
	Date *time.Time `json:"date,omitempty"`
	ID   *int64     `json:"id,omitempty"`
	Usd  *int64     `json:"usd,omitempty"`
}
