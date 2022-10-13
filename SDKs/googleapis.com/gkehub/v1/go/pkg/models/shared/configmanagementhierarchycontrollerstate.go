package shared

type ConfigManagementHierarchyControllerState struct {
	State   *ConfigManagementHierarchyControllerDeploymentState `json:"state"`
	Version *ConfigManagementHierarchyControllerVersion         `json:"version"`
}
