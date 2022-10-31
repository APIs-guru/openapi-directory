package shared




type MonitoredResourceDescriptorLaunchStageEnum string

const (
    MonitoredResourceDescriptorLaunchStageEnumLaunchStageUnspecified MonitoredResourceDescriptorLaunchStageEnum = "LAUNCH_STAGE_UNSPECIFIED"
MonitoredResourceDescriptorLaunchStageEnumUnimplemented MonitoredResourceDescriptorLaunchStageEnum = "UNIMPLEMENTED"
MonitoredResourceDescriptorLaunchStageEnumPrelaunch MonitoredResourceDescriptorLaunchStageEnum = "PRELAUNCH"
MonitoredResourceDescriptorLaunchStageEnumEarlyAccess MonitoredResourceDescriptorLaunchStageEnum = "EARLY_ACCESS"
MonitoredResourceDescriptorLaunchStageEnumAlpha MonitoredResourceDescriptorLaunchStageEnum = "ALPHA"
MonitoredResourceDescriptorLaunchStageEnumBeta MonitoredResourceDescriptorLaunchStageEnum = "BETA"
MonitoredResourceDescriptorLaunchStageEnumGa MonitoredResourceDescriptorLaunchStageEnum = "GA"
MonitoredResourceDescriptorLaunchStageEnumDeprecated MonitoredResourceDescriptorLaunchStageEnum = "DEPRECATED"
)


type MonitoredResourceDescriptor struct {
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Labels []LabelDescriptor `json:"labels,omitempty"`
    LaunchStage *MonitoredResourceDescriptorLaunchStageEnum `json:"launchStage,omitempty"`
    Name *string `json:"name,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

