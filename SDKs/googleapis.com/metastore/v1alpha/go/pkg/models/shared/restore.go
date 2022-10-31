package shared




type RestoreStateEnum string

const (
    RestoreStateEnumStateUnspecified RestoreStateEnum = "STATE_UNSPECIFIED"
RestoreStateEnumRunning RestoreStateEnum = "RUNNING"
RestoreStateEnumSucceeded RestoreStateEnum = "SUCCEEDED"
RestoreStateEnumFailed RestoreStateEnum = "FAILED"
RestoreStateEnumCancelled RestoreStateEnum = "CANCELLED"
)



type RestoreTypeEnum string

const (
    RestoreTypeEnumRestoreTypeUnspecified RestoreTypeEnum = "RESTORE_TYPE_UNSPECIFIED"
RestoreTypeEnumFull RestoreTypeEnum = "FULL"
RestoreTypeEnumMetadataOnly RestoreTypeEnum = "METADATA_ONLY"
)


type Restore struct {
    Backup *string `json:"backup,omitempty"`
    Details *string `json:"details,omitempty"`
    EndTime *string `json:"endTime,omitempty"`
    StartTime *string `json:"startTime,omitempty"`
    State *RestoreStateEnum `json:"state,omitempty"`
    Type *RestoreTypeEnum `json:"type,omitempty"`
    
}

