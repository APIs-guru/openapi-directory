package shared

type MonitoredResourceDescriptorLaunchStageEnum string

const (
	MonitoredResourceDescriptorLaunchStageEnumLaunchStageUnspecified MonitoredResourceDescriptorLaunchStageEnum = "LAUNCH_STAGE_UNSPECIFIED"
	MonitoredResourceDescriptorLaunchStageEnumUnimplemented          MonitoredResourceDescriptorLaunchStageEnum = "UNIMPLEMENTED"
	MonitoredResourceDescriptorLaunchStageEnumPrelaunch              MonitoredResourceDescriptorLaunchStageEnum = "PRELAUNCH"
	MonitoredResourceDescriptorLaunchStageEnumEarlyAccess            MonitoredResourceDescriptorLaunchStageEnum = "EARLY_ACCESS"
	MonitoredResourceDescriptorLaunchStageEnumAlpha                  MonitoredResourceDescriptorLaunchStageEnum = "ALPHA"
	MonitoredResourceDescriptorLaunchStageEnumBeta                   MonitoredResourceDescriptorLaunchStageEnum = "BETA"
	MonitoredResourceDescriptorLaunchStageEnumGa                     MonitoredResourceDescriptorLaunchStageEnum = "GA"
	MonitoredResourceDescriptorLaunchStageEnumDeprecated             MonitoredResourceDescriptorLaunchStageEnum = "DEPRECATED"
)

type MonitoredResourceDescriptor struct {
	Description *string                                     `json:"description"`
	DisplayName *string                                     `json:"displayName"`
	Labels      []LabelDescriptor                           `json:"labels"`
	LaunchStage *MonitoredResourceDescriptorLaunchStageEnum `json:"launchStage"`
	Name        *string                                     `json:"name"`
	Type        *string                                     `json:"type"`
}
