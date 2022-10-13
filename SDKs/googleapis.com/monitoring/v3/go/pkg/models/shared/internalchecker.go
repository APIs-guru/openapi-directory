package shared

type InternalCheckerStateEnum string

const (
	InternalCheckerStateEnumUnspecified InternalCheckerStateEnum = "UNSPECIFIED"
	InternalCheckerStateEnumCreating    InternalCheckerStateEnum = "CREATING"
	InternalCheckerStateEnumRunning     InternalCheckerStateEnum = "RUNNING"
)

type InternalChecker struct {
	DisplayName   *string                   `json:"displayName"`
	GcpZone       *string                   `json:"gcpZone"`
	Name          *string                   `json:"name"`
	Network       *string                   `json:"network"`
	PeerProjectID *string                   `json:"peerProjectId"`
	State         *InternalCheckerStateEnum `json:"state"`
}
