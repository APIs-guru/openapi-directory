package shared

// LaunchFlexTemplateResponse
// Response to the request to launch a job from Flex Template.
type LaunchFlexTemplateResponse struct {
	Job *Job `json:"job,omitempty"`
}
