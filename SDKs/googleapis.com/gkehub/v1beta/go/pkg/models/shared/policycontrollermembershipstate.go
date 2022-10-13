package shared

type PolicyControllerMembershipStateStateEnum string

const (
	PolicyControllerMembershipStateStateEnumLifecycleStateUnspecified PolicyControllerMembershipStateStateEnum = "LIFECYCLE_STATE_UNSPECIFIED"
	PolicyControllerMembershipStateStateEnumNotInstalled              PolicyControllerMembershipStateStateEnum = "NOT_INSTALLED"
	PolicyControllerMembershipStateStateEnumInstalling                PolicyControllerMembershipStateStateEnum = "INSTALLING"
	PolicyControllerMembershipStateStateEnumActive                    PolicyControllerMembershipStateStateEnum = "ACTIVE"
	PolicyControllerMembershipStateStateEnumUpdating                  PolicyControllerMembershipStateStateEnum = "UPDATING"
	PolicyControllerMembershipStateStateEnumDecomissioning            PolicyControllerMembershipStateStateEnum = "DECOMISSIONING"
	PolicyControllerMembershipStateStateEnumClusterError              PolicyControllerMembershipStateStateEnum = "CLUSTER_ERROR"
	PolicyControllerMembershipStateStateEnumHubError                  PolicyControllerMembershipStateStateEnum = "HUB_ERROR"
	PolicyControllerMembershipStateStateEnumSuspended                 PolicyControllerMembershipStateStateEnum = "SUSPENDED"
)

type PolicyControllerMembershipState struct {
	ClusterName     *string                                   `json:"clusterName"`
	ComponentStates map[string]PolicyControllerOnClusterState `json:"componentStates"`
	State           *PolicyControllerMembershipStateStateEnum `json:"state"`
}
