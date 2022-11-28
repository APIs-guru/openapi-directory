package shared

// ConfigManagementMembershipSpec
// **Anthos Config Management**: Configuration for a single cluster. Intended to parallel the ConfigManagement CR.
type ConfigManagementMembershipSpec struct {
	Binauthz            *ConfigManagementBinauthzConfig            `json:"binauthz,omitempty"`
	ConfigSync          *ConfigManagementConfigSync                `json:"configSync,omitempty"`
	HierarchyController *ConfigManagementHierarchyControllerConfig `json:"hierarchyController,omitempty"`
	PolicyController    *ConfigManagementPolicyController          `json:"policyController,omitempty"`
	Version             *string                                    `json:"version,omitempty"`
}
