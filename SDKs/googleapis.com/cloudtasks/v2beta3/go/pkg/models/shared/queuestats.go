package shared

// QueueStats
// Statistics for a queue.
type QueueStats struct {
	ConcurrentDispatchesCount  *string  `json:"concurrentDispatchesCount,omitempty"`
	EffectiveExecutionRate     *float64 `json:"effectiveExecutionRate,omitempty"`
	ExecutedLastMinuteCount    *string  `json:"executedLastMinuteCount,omitempty"`
	OldestEstimatedArrivalTime *string  `json:"oldestEstimatedArrivalTime,omitempty"`
	TasksCount                 *string  `json:"tasksCount,omitempty"`
}
