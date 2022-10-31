package shared

type GoogleCloudDatapipelinesV1LaunchTemplateParameters struct {
	Environment          *GoogleCloudDatapipelinesV1RuntimeEnvironment `json:"environment,omitempty"`
	JobName              *string                                       `json:"jobName,omitempty"`
	Parameters           map[string]string                             `json:"parameters,omitempty"`
	TransformNameMapping map[string]string                             `json:"transformNameMapping,omitempty"`
	Update               *bool                                         `json:"update,omitempty"`
}
