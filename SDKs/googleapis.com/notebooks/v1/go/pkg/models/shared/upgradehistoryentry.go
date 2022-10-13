package shared

type UpgradeHistoryEntryActionEnum string

const (
	UpgradeHistoryEntryActionEnumActionUnspecified UpgradeHistoryEntryActionEnum = "ACTION_UNSPECIFIED"
	UpgradeHistoryEntryActionEnumUpgrade           UpgradeHistoryEntryActionEnum = "UPGRADE"
	UpgradeHistoryEntryActionEnumRollback          UpgradeHistoryEntryActionEnum = "ROLLBACK"
)

type UpgradeHistoryEntryStateEnum string

const (
	UpgradeHistoryEntryStateEnumStateUnspecified UpgradeHistoryEntryStateEnum = "STATE_UNSPECIFIED"
	UpgradeHistoryEntryStateEnumStarted          UpgradeHistoryEntryStateEnum = "STARTED"
	UpgradeHistoryEntryStateEnumSucceeded        UpgradeHistoryEntryStateEnum = "SUCCEEDED"
	UpgradeHistoryEntryStateEnumFailed           UpgradeHistoryEntryStateEnum = "FAILED"
)

type UpgradeHistoryEntry struct {
	Action         *UpgradeHistoryEntryActionEnum `json:"action"`
	ContainerImage *string                        `json:"containerImage"`
	CreateTime     *string                        `json:"createTime"`
	Framework      *string                        `json:"framework"`
	Snapshot       *string                        `json:"snapshot"`
	State          *UpgradeHistoryEntryStateEnum  `json:"state"`
	TargetImage    *string                        `json:"targetImage"`
	TargetVersion  *string                        `json:"targetVersion"`
	Version        *string                        `json:"version"`
	VMImage        *string                        `json:"vmImage"`
}
