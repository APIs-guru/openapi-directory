package shared

type RestoreStateEnum string

const (
	RestoreStateEnumStateUnspecified RestoreStateEnum = "STATE_UNSPECIFIED"
	RestoreStateEnumRunning          RestoreStateEnum = "RUNNING"
	RestoreStateEnumSucceeded        RestoreStateEnum = "SUCCEEDED"
	RestoreStateEnumFailed           RestoreStateEnum = "FAILED"
	RestoreStateEnumCancelled        RestoreStateEnum = "CANCELLED"
)

type RestoreTypeEnum string

const (
	RestoreTypeEnumRestoreTypeUnspecified RestoreTypeEnum = "RESTORE_TYPE_UNSPECIFIED"
	RestoreTypeEnumFull                   RestoreTypeEnum = "FULL"
	RestoreTypeEnumMetadataOnly           RestoreTypeEnum = "METADATA_ONLY"
)

type Restore struct {
	Backup    *string           `json:"backup"`
	Details   *string           `json:"details"`
	EndTime   *string           `json:"endTime"`
	StartTime *string           `json:"startTime"`
	State     *RestoreStateEnum `json:"state"`
	Type      *RestoreTypeEnum  `json:"type"`
}
