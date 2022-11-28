package shared

// TaskStatus
// TaskStatus represents the status of a task.
type TaskStatus struct {
	CompletionTime     *string                     `json:"completionTime,omitempty"`
	Conditions         []GoogleCloudRunV1Condition `json:"conditions,omitempty"`
	Index              *int32                      `json:"index,omitempty"`
	LastAttemptResult  *TaskAttemptResult          `json:"lastAttemptResult,omitempty"`
	LogURI             *string                     `json:"logUri,omitempty"`
	ObservedGeneration *int32                      `json:"observedGeneration,omitempty"`
	Retried            *int32                      `json:"retried,omitempty"`
	StartTime          *string                     `json:"startTime,omitempty"`
}
