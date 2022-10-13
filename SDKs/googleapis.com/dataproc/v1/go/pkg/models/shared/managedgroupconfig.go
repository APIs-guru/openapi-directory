package shared

type ManagedGroupConfig struct {
	InstanceGroupManagerName *string `json:"instanceGroupManagerName"`
	InstanceTemplateName     *string `json:"instanceTemplateName"`
}
