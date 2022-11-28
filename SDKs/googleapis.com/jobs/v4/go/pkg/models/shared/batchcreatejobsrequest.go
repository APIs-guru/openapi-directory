package shared

// BatchCreateJobsRequestInput
// Request to create a batch of jobs.
type BatchCreateJobsRequestInput struct {
	Jobs []JobInput `json:"jobs,omitempty"`
}
