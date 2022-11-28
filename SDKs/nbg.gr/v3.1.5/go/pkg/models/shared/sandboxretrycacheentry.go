package shared

import (
	"time"
)

// SandboxRetryCacheEntry
// Keeps the number of calls without x-fapi-customer-ip-address header present
type SandboxRetryCacheEntry struct {
	CacheKey            *string    `json:"cacheKey,omitempty"`
	Count               *int32     `json:"count,omitempty"`
	ExpirationTimestamp *time.Time `json:"expirationTimestamp,omitempty"`
}
