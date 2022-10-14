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
	Action         *UpgradeHistoryEntryActionEnum `json:"action,omitempty"`
	ContainerImage *string                        `json:"containerImage,omitempty"`
	CreateTime     *string                        `json:"createTime,omitempty"`
	Framework      *string                        `json:"framework,omitempty"`
	Snapshot       *string                        `json:"snapshot,omitempty"`
	State          *UpgradeHistoryEntryStateEnum  `json:"state,omitempty"`
	TargetImage    *string                        `json:"targetImage,omitempty"`
	TargetVersion  *string                        `json:"targetVersion,omitempty"`
	Version        *string                        `json:"version,omitempty"`
	VMImage        *string                        `json:"vmImage,omitempty"`
}
