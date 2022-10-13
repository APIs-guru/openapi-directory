package shared

type EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata struct {
	EventAttemptNum *int32  `json:"eventAttemptNum"`
	TaskAttemptNum  *int32  `json:"taskAttemptNum"`
	TaskName        *string `json:"taskName"`
	TaskNumber      *string `json:"taskNumber"`
}
