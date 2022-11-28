package shared

// RateLimits
// Rate limits. This message determines the maximum rate that tasks can be dispatched by a queue, regardless of whether the dispatch is a first task attempt or a retry. Note: The debugging command, RunTask, will run a task even if the queue has reached its RateLimits.
type RateLimits struct {
	MaxBurstSize            *int32   `json:"maxBurstSize,omitempty"`
	MaxConcurrentDispatches *int32   `json:"maxConcurrentDispatches,omitempty"`
	MaxDispatchesPerSecond  *float64 `json:"maxDispatchesPerSecond,omitempty"`
}
