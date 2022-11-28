package shared

// ConfigManagementHierarchyControllerConfig
// Configuration for Hierarchy Controller
type ConfigManagementHierarchyControllerConfig struct {
	EnableHierarchicalResourceQuota *bool `json:"enableHierarchicalResourceQuota,omitempty"`
	EnablePodTreeLabels             *bool `json:"enablePodTreeLabels,omitempty"`
	Enabled                         *bool `json:"enabled,omitempty"`
}
