package shared

type LaunchFlexTemplateParameter struct {
	ContainerSpec         *ContainerSpec                  `json:"containerSpec"`
	ContainerSpecGcsPath  *string                         `json:"containerSpecGcsPath"`
	Environment           *FlexTemplateRuntimeEnvironment `json:"environment"`
	JobName               *string                         `json:"jobName"`
	LaunchOptions         map[string]string               `json:"launchOptions"`
	Parameters            map[string]string               `json:"parameters"`
	TransformNameMappings map[string]string               `json:"transformNameMappings"`
	Update                *bool                           `json:"update"`
}
