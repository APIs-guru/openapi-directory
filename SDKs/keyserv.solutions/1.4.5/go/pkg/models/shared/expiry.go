package shared

import (
	"time"
)

type Expiry struct {
	Expires *time.Time `json:"expires"`
	Time    *string    `json:"time"`
}
