package shared

import (
	"time"
)

type Expiry struct {
	Expires *time.Time `json:"expires,omitempty"`
	Time    *string    `json:"time,omitempty"`
}
