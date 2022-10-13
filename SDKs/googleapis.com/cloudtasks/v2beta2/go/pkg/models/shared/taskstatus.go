package shared

type TaskStatus struct {
	AttemptDispatchCount *int32         `json:"attemptDispatchCount"`
	AttemptResponseCount *int32         `json:"attemptResponseCount"`
	FirstAttemptStatus   *AttemptStatus `json:"firstAttemptStatus"`
	LastAttemptStatus    *AttemptStatus `json:"lastAttemptStatus"`
}
