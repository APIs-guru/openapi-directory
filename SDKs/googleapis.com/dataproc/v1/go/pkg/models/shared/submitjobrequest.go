package shared

// SubmitJobRequestInput
// A request to submit a job.
type SubmitJobRequestInput struct {
	Job       *JobInput `json:"job,omitempty"`
	RequestID *string   `json:"requestId,omitempty"`
}
