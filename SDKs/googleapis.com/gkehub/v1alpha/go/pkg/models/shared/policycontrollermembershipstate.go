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

// PolicyControllerMembershipState
// **Policy Controller**: State for a single cluster.
type PolicyControllerMembershipState struct {
	ComponentStates map[string]PolicyControllerOnClusterState `json:"componentStates,omitempty"`
	State           *PolicyControllerMembershipStateStateEnum `json:"state,omitempty"`
}
