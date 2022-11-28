package shared

// ConfigManagementHierarchyControllerState
// State for Hierarchy Controller
type ConfigManagementHierarchyControllerState struct {
	State   *ConfigManagementHierarchyControllerDeploymentState `json:"state,omitempty"`
	Version *ConfigManagementHierarchyControllerVersion         `json:"version,omitempty"`
}
