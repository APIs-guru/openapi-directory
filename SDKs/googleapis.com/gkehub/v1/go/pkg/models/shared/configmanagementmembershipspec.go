package shared



type ConfigManagementMembershipSpec struct {
    ConfigSync *ConfigManagementConfigSync `json:"configSync,omitempty"`
    HierarchyController *ConfigManagementHierarchyControllerConfig `json:"hierarchyController,omitempty"`
    PolicyController *ConfigManagementPolicyController `json:"policyController,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

