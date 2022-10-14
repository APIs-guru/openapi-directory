package shared

type SubmitJobRequest struct {
	Job       *Job    `json:"job,omitempty"`
	RequestID *string `json:"requestId,omitempty"`
}
