package shared

type UpgradeStatusStateEnum string

const (
	UpgradeStatusStateEnumStateUnspecified UpgradeStatusStateEnum = "STATE_UNSPECIFIED"
	UpgradeStatusStateEnumRunning          UpgradeStatusStateEnum = "RUNNING"
	UpgradeStatusStateEnumFailed           UpgradeStatusStateEnum = "FAILED"
	UpgradeStatusStateEnumSucceeded        UpgradeStatusStateEnum = "SUCCEEDED"
)

type UpgradeStatus struct {
	Error           *Status                 `json:"error"`
	PreviousVersion *string                 `json:"previousVersion"`
	StartTime       *string                 `json:"startTime"`
	State           *UpgradeStatusStateEnum `json:"state"`
	Version         *string                 `json:"version"`
}
