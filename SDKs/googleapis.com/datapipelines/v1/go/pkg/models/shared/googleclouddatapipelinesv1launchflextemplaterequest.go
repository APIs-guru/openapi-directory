package shared

type GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest struct {
	LaunchParameter *GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter `json:"launchParameter"`
	Location        *string                                                `json:"location"`
	ProjectID       *string                                                `json:"projectId"`
	ValidateOnly    *bool                                                  `json:"validateOnly"`
}
