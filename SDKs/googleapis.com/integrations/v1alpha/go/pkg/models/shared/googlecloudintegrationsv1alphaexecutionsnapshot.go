package shared

type GoogleCloudIntegrationsV1alphaExecutionSnapshot struct {
	CheckpointTaskNumber      *string                                                                   `json:"checkpointTaskNumber,omitempty"`
	ExecutionSnapshotMetadata *GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadata `json:"executionSnapshotMetadata,omitempty"`
	Params                    map[string]GoogleCloudIntegrationsV1alphaValueType                        `json:"params,omitempty"`
	TaskExecutionDetails      []GoogleCloudIntegrationsV1alphaTaskExecutionDetails                      `json:"taskExecutionDetails,omitempty"`
}
