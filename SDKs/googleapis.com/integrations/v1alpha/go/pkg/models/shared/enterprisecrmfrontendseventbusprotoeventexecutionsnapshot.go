package shared

type EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot struct {
	CheckpointTaskNumber           *string                                                                         `json:"checkpointTaskNumber"`
	ConditionResults               []EnterpriseCrmEventbusProtoConditionResult                                     `json:"conditionResults"`
	DiffParams                     *EnterpriseCrmFrontendsEventbusProtoEventParameters                             `json:"diffParams"`
	EventExecutionInfoID           *string                                                                         `json:"eventExecutionInfoId"`
	EventExecutionSnapshotID       *string                                                                         `json:"eventExecutionSnapshotId"`
	EventExecutionSnapshotMetadata *EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata `json:"eventExecutionSnapshotMetadata"`
	EventParams                    *EnterpriseCrmFrontendsEventbusProtoEventParameters                             `json:"eventParams"`
	SnapshotTime                   *string                                                                         `json:"snapshotTime"`
	TaskExecutionDetails           []EnterpriseCrmEventbusProtoTaskExecutionDetails                                `json:"taskExecutionDetails"`
	TaskName                       *string                                                                         `json:"taskName"`
}
