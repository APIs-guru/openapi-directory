package shared

import (
	"time"
)

type TrustedDevice struct {
	Created           *time.Time `json:"created"`
	Expiry            *time.Time `json:"expiry"`
	ID                *int64     `json:"id"`
	LastAuthenticated *time.Time `json:"last_authenticated"`
	LastRemoteAddr    *string    `json:"last_remote_addr"`
	UserAgent         *string    `json:"user_agent"`
}
