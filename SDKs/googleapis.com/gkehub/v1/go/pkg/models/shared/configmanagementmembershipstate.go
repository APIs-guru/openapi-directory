package shared



type ConfigManagementMembershipState struct {
    ClusterName *string `json:"clusterName,omitempty"`
    ConfigSyncState *ConfigManagementConfigSyncState `json:"configSyncState,omitempty"`
    HierarchyControllerState *ConfigManagementHierarchyControllerState `json:"hierarchyControllerState,omitempty"`
    MembershipSpec *ConfigManagementMembershipSpec `json:"membershipSpec,omitempty"`
    OperatorState *ConfigManagementOperatorState `json:"operatorState,omitempty"`
    PolicyControllerState *ConfigManagementPolicyControllerState `json:"policyControllerState,omitempty"`
    
}

