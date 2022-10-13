package shared

type LaunchFlexTemplateRequest struct {
	LaunchParameter *LaunchFlexTemplateParameter `json:"launchParameter"`
	ValidateOnly    *bool                        `json:"validateOnly"`
}
