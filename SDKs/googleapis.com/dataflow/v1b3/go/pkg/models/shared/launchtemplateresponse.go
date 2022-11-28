package shared

// LaunchTemplateResponse
// Response to the request to launch a template.
type LaunchTemplateResponse struct {
	Job *Job `json:"job,omitempty"`
}
