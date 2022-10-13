package shared

type QueueStats struct {
	ConcurrentDispatchesCount  *string  `json:"concurrentDispatchesCount"`
	EffectiveExecutionRate     *float64 `json:"effectiveExecutionRate"`
	ExecutedLastMinuteCount    *string  `json:"executedLastMinuteCount"`
	OldestEstimatedArrivalTime *string  `json:"oldestEstimatedArrivalTime"`
	TasksCount                 *string  `json:"tasksCount"`
}
