package shared

type SubmitJobRequest struct {
	Job       *Job    `json:"job"`
	RequestID *string `json:"requestId"`
}
