package shared

type ConfigManagementMembershipState struct {
	BinauthzState            *ConfigManagementBinauthzState            `json:"binauthzState"`
	ClusterName              *string                                   `json:"clusterName"`
	ConfigSyncState          *ConfigManagementConfigSyncState          `json:"configSyncState"`
	HierarchyControllerState *ConfigManagementHierarchyControllerState `json:"hierarchyControllerState"`
	MembershipSpec           *ConfigManagementMembershipSpec           `json:"membershipSpec"`
	OperatorState            *ConfigManagementOperatorState            `json:"operatorState"`
	PolicyControllerState    *ConfigManagementPolicyControllerState    `json:"policyControllerState"`
}
