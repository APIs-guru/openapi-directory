package shared

type RateLimits struct {
	MaxBurstSize            *int32   `json:"maxBurstSize,omitempty"`
	MaxConcurrentDispatches *int32   `json:"maxConcurrentDispatches,omitempty"`
	MaxDispatchesPerSecond  *float64 `json:"maxDispatchesPerSecond,omitempty"`
}
