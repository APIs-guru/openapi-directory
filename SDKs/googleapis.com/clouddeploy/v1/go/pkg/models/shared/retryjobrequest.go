package shared

// RetryJobRequest
// RetryJobRequest is the request object used by `RetryJob`.
type RetryJobRequest struct {
	JobID   *string `json:"jobId,omitempty"`
	PhaseID *string `json:"phaseId,omitempty"`
}
