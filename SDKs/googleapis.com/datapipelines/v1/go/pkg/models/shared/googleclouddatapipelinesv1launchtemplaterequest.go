package shared

type GoogleCloudDatapipelinesV1LaunchTemplateRequest struct {
	GcsPath          *string                                             `json:"gcsPath,omitempty"`
	LaunchParameters *GoogleCloudDatapipelinesV1LaunchTemplateParameters `json:"launchParameters,omitempty"`
	Location         *string                                             `json:"location,omitempty"`
	ProjectID        *string                                             `json:"projectId,omitempty"`
	ValidateOnly     *bool                                               `json:"validateOnly,omitempty"`
}
