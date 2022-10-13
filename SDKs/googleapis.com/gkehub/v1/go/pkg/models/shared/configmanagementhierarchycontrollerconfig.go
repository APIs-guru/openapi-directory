package shared

type ConfigManagementHierarchyControllerConfig struct {
	EnableHierarchicalResourceQuota *bool `json:"enableHierarchicalResourceQuota"`
	EnablePodTreeLabels             *bool `json:"enablePodTreeLabels"`
	Enabled                         *bool `json:"enabled"`
}
