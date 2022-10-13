package shared

type PolicyControllerOnClusterStateStateEnum string

const (
	PolicyControllerOnClusterStateStateEnumLifecycleStateUnspecified PolicyControllerOnClusterStateStateEnum = "LIFECYCLE_STATE_UNSPECIFIED"
	PolicyControllerOnClusterStateStateEnumNotInstalled              PolicyControllerOnClusterStateStateEnum = "NOT_INSTALLED"
	PolicyControllerOnClusterStateStateEnumInstalling                PolicyControllerOnClusterStateStateEnum = "INSTALLING"
	PolicyControllerOnClusterStateStateEnumActive                    PolicyControllerOnClusterStateStateEnum = "ACTIVE"
	PolicyControllerOnClusterStateStateEnumUpdating                  PolicyControllerOnClusterStateStateEnum = "UPDATING"
	PolicyControllerOnClusterStateStateEnumDecomissioning            PolicyControllerOnClusterStateStateEnum = "DECOMISSIONING"
	PolicyControllerOnClusterStateStateEnumClusterError              PolicyControllerOnClusterStateStateEnum = "CLUSTER_ERROR"
	PolicyControllerOnClusterStateStateEnumHubError                  PolicyControllerOnClusterStateStateEnum = "HUB_ERROR"
	PolicyControllerOnClusterStateStateEnumSuspended                 PolicyControllerOnClusterStateStateEnum = "SUSPENDED"
)

type PolicyControllerOnClusterState struct {
	Details *string                                  `json:"details"`
	State   *PolicyControllerOnClusterStateStateEnum `json:"state"`
}
