package shared

type JobReference struct {
	JobID     *string `json:"jobId,omitempty"`
	ProjectID *string `json:"projectId,omitempty"`
}
