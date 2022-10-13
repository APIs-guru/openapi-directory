package shared

type RetryJobRequest struct {
	JobID   *string `json:"jobId"`
	PhaseID *string `json:"phaseId"`
}
