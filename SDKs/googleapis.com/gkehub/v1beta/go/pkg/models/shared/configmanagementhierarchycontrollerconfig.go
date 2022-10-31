package shared



type ConfigManagementHierarchyControllerConfig struct {
    EnableHierarchicalResourceQuota *bool `json:"enableHierarchicalResourceQuota,omitempty"`
    EnablePodTreeLabels *bool `json:"enablePodTreeLabels,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    
}

