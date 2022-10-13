package shared

type GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadata struct {
	ExecutionAttempt *int32  `json:"executionAttempt"`
	Task             *string `json:"task"`
	TaskAttempt      *int32  `json:"taskAttempt"`
	TaskNumber       *string `json:"taskNumber"`
}
