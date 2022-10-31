package shared



type ConfigManagementMembershipSpec struct {
    Binauthz *ConfigManagementBinauthzConfig `json:"binauthz,omitempty"`
    ConfigSync *ConfigManagementConfigSync `json:"configSync,omitempty"`
    HierarchyController *ConfigManagementHierarchyControllerConfig `json:"hierarchyController,omitempty"`
    PolicyController *ConfigManagementPolicyController `json:"policyController,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

