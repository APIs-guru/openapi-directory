package shared

type GoogleCloudDatapipelinesV1LaunchTemplateRequest struct {
	GcsPath          *string                                             `json:"gcsPath"`
	LaunchParameters *GoogleCloudDatapipelinesV1LaunchTemplateParameters `json:"launchParameters"`
	Location         *string                                             `json:"location"`
	ProjectID        *string                                             `json:"projectId"`
	ValidateOnly     *bool                                               `json:"validateOnly"`
}
