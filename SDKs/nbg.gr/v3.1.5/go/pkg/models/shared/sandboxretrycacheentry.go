package shared

import (
	"time"
)

type SandboxRetryCacheEntry struct {
	CacheKey            *string    `json:"cacheKey"`
	Count               *int32     `json:"count"`
	ExpirationTimestamp *time.Time `json:"expirationTimestamp"`
}
