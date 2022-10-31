package shared



type LaunchFlexTemplateParameter struct {
    ContainerSpec *ContainerSpec `json:"containerSpec,omitempty"`
    ContainerSpecGcsPath *string `json:"containerSpecGcsPath,omitempty"`
    Environment *FlexTemplateRuntimeEnvironment `json:"environment,omitempty"`
    JobName *string `json:"jobName,omitempty"`
    LaunchOptions map[string]string `json:"launchOptions,omitempty"`
    Parameters map[string]string `json:"parameters,omitempty"`
    TransformNameMappings map[string]string `json:"transformNameMappings,omitempty"`
    Update *bool `json:"update,omitempty"`
    
}

