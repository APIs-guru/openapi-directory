package shared



type EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot struct {
    CheckpointTaskNumber *string `json:"checkpointTaskNumber,omitempty"`
    ConditionResults []EnterpriseCrmEventbusProtoConditionResult `json:"conditionResults,omitempty"`
    DiffParams *EnterpriseCrmFrontendsEventbusProtoEventParameters `json:"diffParams,omitempty"`
    EventExecutionInfoID *string `json:"eventExecutionInfoId,omitempty"`
    EventExecutionSnapshotID *string `json:"eventExecutionSnapshotId,omitempty"`
    EventExecutionSnapshotMetadata *EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata `json:"eventExecutionSnapshotMetadata,omitempty"`
    EventParams *EnterpriseCrmFrontendsEventbusProtoEventParameters `json:"eventParams,omitempty"`
    SnapshotTime *string `json:"snapshotTime,omitempty"`
    TaskExecutionDetails []EnterpriseCrmEventbusProtoTaskExecutionDetails `json:"taskExecutionDetails,omitempty"`
    TaskName *string `json:"taskName,omitempty"`
    
}

