package shared

// ManagedGroupConfig
// Specifies the resources used to actively manage an instance group.
type ManagedGroupConfig struct {
	InstanceGroupManagerName *string `json:"instanceGroupManagerName,omitempty"`
	InstanceTemplateName     *string `json:"instanceTemplateName,omitempty"`
}
