package shared

import (
"time")

type SandboxRetryCacheEntry struct {
    CacheKey *string `json:"cacheKey,omitempty"`
    Count *int32 `json:"count,omitempty"`
    ExpirationTimestamp *time.Time `json:"expirationTimestamp,omitempty"`
    
}

