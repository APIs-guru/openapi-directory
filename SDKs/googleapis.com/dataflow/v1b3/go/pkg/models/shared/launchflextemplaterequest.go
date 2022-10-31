package shared

type LaunchFlexTemplateRequest struct {
	LaunchParameter *LaunchFlexTemplateParameter `json:"launchParameter,omitempty"`
	ValidateOnly    *bool                        `json:"validateOnly,omitempty"`
}
