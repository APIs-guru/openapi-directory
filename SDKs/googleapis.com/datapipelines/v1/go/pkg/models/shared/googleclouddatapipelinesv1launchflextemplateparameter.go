package shared



type GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter struct {
    ContainerSpecGcsPath *string `json:"containerSpecGcsPath,omitempty"`
    Environment *GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment `json:"environment,omitempty"`
    JobName *string `json:"jobName,omitempty"`
    LaunchOptions map[string]string `json:"launchOptions,omitempty"`
    Parameters map[string]string `json:"parameters,omitempty"`
    TransformNameMappings map[string]string `json:"transformNameMappings,omitempty"`
    Update *bool `json:"update,omitempty"`
    
}

