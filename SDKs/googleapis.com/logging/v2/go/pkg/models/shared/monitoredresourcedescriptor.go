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

// MonitoredResourceDescriptor
// An object that describes the schema of a MonitoredResource object using a type name and a set of labels. For example, the monitored resource descriptor for Google Compute Engine VM instances has a type of "gce_instance" and specifies the use of the labels "instance_id" and "zone" to identify particular VM instances.Different APIs can support different monitored resource types. APIs generally provide a list method that returns the monitored resource descriptors used by the API.
type MonitoredResourceDescriptor struct {
	Description *string                                     `json:"description,omitempty"`
	DisplayName *string                                     `json:"displayName,omitempty"`
	Labels      []LabelDescriptor                           `json:"labels,omitempty"`
	LaunchStage *MonitoredResourceDescriptorLaunchStageEnum `json:"launchStage,omitempty"`
	Name        *string                                     `json:"name,omitempty"`
	Type        *string                                     `json:"type,omitempty"`
}
