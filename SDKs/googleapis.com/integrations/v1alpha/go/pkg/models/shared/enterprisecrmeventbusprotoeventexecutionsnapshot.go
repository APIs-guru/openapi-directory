package shared

// EnterpriseCrmEventbusProtoEventExecutionSnapshot
// Contains the snapshot of the event execution for a given checkpoint. Next available id: 13
type EnterpriseCrmEventbusProtoEventExecutionSnapshot struct {
	CheckpointTaskNumber           *string                                                                         `json:"checkpointTaskNumber,omitempty"`
	ConditionResults               []EnterpriseCrmEventbusProtoConditionResult                                     `json:"conditionResults,omitempty"`
	DiffParams                     *EnterpriseCrmEventbusProtoEventParameters                                      `json:"diffParams,omitempty"`
	EventExecutionInfoID           *string                                                                         `json:"eventExecutionInfoId,omitempty"`
	EventExecutionSnapshotID       *string                                                                         `json:"eventExecutionSnapshotId,omitempty"`
	EventExecutionSnapshotMetadata *EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata `json:"eventExecutionSnapshotMetadata,omitempty"`
	EventParams                    *EnterpriseCrmEventbusProtoEventParameters                                      `json:"eventParams,omitempty"`
	ExceedMaxSize                  *bool                                                                           `json:"exceedMaxSize,omitempty"`
	SnapshotTime                   *string                                                                         `json:"snapshotTime,omitempty"`
	TaskExecutionDetails           []EnterpriseCrmEventbusProtoTaskExecutionDetails                                `json:"taskExecutionDetails,omitempty"`
	TaskName                       *string                                                                         `json:"taskName,omitempty"`
}
