package shared

// JobReference
// Encapsulates the full scoping used to reference a job.
type JobReference struct {
	JobID     *string `json:"jobId,omitempty"`
	ProjectID *string `json:"projectId,omitempty"`
}
