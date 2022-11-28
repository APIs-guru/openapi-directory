package shared

// TaskStatus
// Status of the task.
type TaskStatus struct {
	AttemptDispatchCount *int32         `json:"attemptDispatchCount,omitempty"`
	AttemptResponseCount *int32         `json:"attemptResponseCount,omitempty"`
	FirstAttemptStatus   *AttemptStatus `json:"firstAttemptStatus,omitempty"`
	LastAttemptStatus    *AttemptStatus `json:"lastAttemptStatus,omitempty"`
}
