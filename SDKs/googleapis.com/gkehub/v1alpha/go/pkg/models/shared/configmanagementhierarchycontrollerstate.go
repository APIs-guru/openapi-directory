package shared

type ConfigManagementHierarchyControllerState struct {
	State   *ConfigManagementHierarchyControllerDeploymentState `json:"state,omitempty"`
	Version *ConfigManagementHierarchyControllerVersion         `json:"version,omitempty"`
}
