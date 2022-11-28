package shared

type UpgradeStatusStateEnum string

const (
	UpgradeStatusStateEnumStateUnspecified UpgradeStatusStateEnum = "STATE_UNSPECIFIED"
	UpgradeStatusStateEnumRunning          UpgradeStatusStateEnum = "RUNNING"
	UpgradeStatusStateEnumFailed           UpgradeStatusStateEnum = "FAILED"
	UpgradeStatusStateEnumSucceeded        UpgradeStatusStateEnum = "SUCCEEDED"
)

// UpgradeStatus
// UpgradeStatus contains information about upgradeAppliance operation.
type UpgradeStatus struct {
	Error           *Status                 `json:"error,omitempty"`
	PreviousVersion *string                 `json:"previousVersion,omitempty"`
	StartTime       *string                 `json:"startTime,omitempty"`
	State           *UpgradeStatusStateEnum `json:"state,omitempty"`
	Version         *string                 `json:"version,omitempty"`
}
