package shared

// LaunchFlexTemplateRequest
// A request to launch a Cloud Dataflow job from a FlexTemplate.
type LaunchFlexTemplateRequest struct {
	LaunchParameter *LaunchFlexTemplateParameter `json:"launchParameter,omitempty"`
	ValidateOnly    *bool                        `json:"validateOnly,omitempty"`
}
