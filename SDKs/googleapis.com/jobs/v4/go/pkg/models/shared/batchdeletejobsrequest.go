package shared

// BatchDeleteJobsRequest
// Request to delete a batch of jobs.
type BatchDeleteJobsRequest struct {
	Names []string `json:"names,omitempty"`
}
