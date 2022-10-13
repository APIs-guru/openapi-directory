package shared

type RateLimits struct {
	MaxBurstSize                *int32   `json:"maxBurstSize"`
	MaxConcurrentTasks          *int32   `json:"maxConcurrentTasks"`
	MaxTasksDispatchedPerSecond *float64 `json:"maxTasksDispatchedPerSecond"`
}
