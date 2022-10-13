package shared

type GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter struct {
	ContainerSpecGcsPath  *string                                                   `json:"containerSpecGcsPath"`
	Environment           *GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment `json:"environment"`
	JobName               *string                                                   `json:"jobName"`
	LaunchOptions         map[string]string                                         `json:"launchOptions"`
	Parameters            map[string]string                                         `json:"parameters"`
	TransformNameMappings map[string]string                                         `json:"transformNameMappings"`
	Update                *bool                                                     `json:"update"`
}
