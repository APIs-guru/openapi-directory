package shared

type RateLimits struct {
	MaxBurstSize                *int32   `json:"maxBurstSize,omitempty"`
	MaxConcurrentTasks          *int32   `json:"maxConcurrentTasks,omitempty"`
	MaxTasksDispatchedPerSecond *float64 `json:"maxTasksDispatchedPerSecond,omitempty"`
}
