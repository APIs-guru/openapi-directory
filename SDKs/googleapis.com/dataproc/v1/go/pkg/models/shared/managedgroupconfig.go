package shared

type ManagedGroupConfig struct {
	InstanceGroupManagerName *string `json:"instanceGroupManagerName,omitempty"`
	InstanceTemplateName     *string `json:"instanceTemplateName,omitempty"`
}
