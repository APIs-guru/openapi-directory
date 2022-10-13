package shared

type ConfigManagementMembershipSpec struct {
	ConfigSync          *ConfigManagementConfigSync                `json:"configSync"`
	HierarchyController *ConfigManagementHierarchyControllerConfig `json:"hierarchyController"`
	PolicyController    *ConfigManagementPolicyController          `json:"policyController"`
	Version             *string                                    `json:"version"`
}
