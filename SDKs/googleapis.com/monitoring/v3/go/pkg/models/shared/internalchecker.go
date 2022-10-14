package shared

type InternalCheckerStateEnum string

const (
	InternalCheckerStateEnumUnspecified InternalCheckerStateEnum = "UNSPECIFIED"
	InternalCheckerStateEnumCreating    InternalCheckerStateEnum = "CREATING"
	InternalCheckerStateEnumRunning     InternalCheckerStateEnum = "RUNNING"
)

type InternalChecker struct {
	DisplayName   *string                   `json:"displayName,omitempty"`
	GcpZone       *string                   `json:"gcpZone,omitempty"`
	Name          *string                   `json:"name,omitempty"`
	Network       *string                   `json:"network,omitempty"`
	PeerProjectID *string                   `json:"peerProjectId,omitempty"`
	State         *InternalCheckerStateEnum `json:"state,omitempty"`
}
