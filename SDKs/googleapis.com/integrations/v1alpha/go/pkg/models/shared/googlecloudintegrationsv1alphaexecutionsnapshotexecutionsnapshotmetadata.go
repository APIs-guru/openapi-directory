package shared

// GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadata
// Metadata of the execution snapshot.
type GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadata struct {
	ExecutionAttempt *int32  `json:"executionAttempt,omitempty"`
	Task             *string `json:"task,omitempty"`
	TaskAttempt      *int32  `json:"taskAttempt,omitempty"`
	TaskNumber       *string `json:"taskNumber,omitempty"`
}
