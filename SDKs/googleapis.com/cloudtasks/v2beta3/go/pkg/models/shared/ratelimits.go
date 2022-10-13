package shared

type RateLimits struct {
	MaxBurstSize            *int32   `json:"maxBurstSize"`
	MaxConcurrentDispatches *int32   `json:"maxConcurrentDispatches"`
	MaxDispatchesPerSecond  *float64 `json:"maxDispatchesPerSecond"`
}
