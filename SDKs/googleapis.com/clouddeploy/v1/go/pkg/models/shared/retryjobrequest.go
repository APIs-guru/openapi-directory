package shared

type RetryJobRequest struct {
	JobID   *string `json:"jobId,omitempty"`
	PhaseID *string `json:"phaseId,omitempty"`
}
