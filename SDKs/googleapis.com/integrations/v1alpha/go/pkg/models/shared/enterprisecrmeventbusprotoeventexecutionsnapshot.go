package shared

type EnterpriseCrmEventbusProtoEventExecutionSnapshot struct {
	CheckpointTaskNumber           *string                                                                         `json:"checkpointTaskNumber"`
	ConditionResults               []EnterpriseCrmEventbusProtoConditionResult                                     `json:"conditionResults"`
	DiffParams                     *EnterpriseCrmEventbusProtoEventParameters                                      `json:"diffParams"`
	EventExecutionInfoID           *string                                                                         `json:"eventExecutionInfoId"`
	EventExecutionSnapshotID       *string                                                                         `json:"eventExecutionSnapshotId"`
	EventExecutionSnapshotMetadata *EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata `json:"eventExecutionSnapshotMetadata"`
	EventParams                    *EnterpriseCrmEventbusProtoEventParameters                                      `json:"eventParams"`
	ExceedMaxSize                  *bool                                                                           `json:"exceedMaxSize"`
	SnapshotTime                   *string                                                                         `json:"snapshotTime"`
	TaskExecutionDetails           []EnterpriseCrmEventbusProtoTaskExecutionDetails                                `json:"taskExecutionDetails"`
	TaskName                       *string                                                                         `json:"taskName"`
}
