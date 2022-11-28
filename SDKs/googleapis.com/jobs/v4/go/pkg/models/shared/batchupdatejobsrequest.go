package shared

// BatchUpdateJobsRequestInput
// Request to update a batch of jobs.
type BatchUpdateJobsRequestInput struct {
	Jobs       []JobInput `json:"jobs,omitempty"`
	UpdateMask *string    `json:"updateMask,omitempty"`
}
