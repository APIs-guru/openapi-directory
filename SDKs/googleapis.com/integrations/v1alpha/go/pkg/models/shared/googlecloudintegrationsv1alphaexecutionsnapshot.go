package shared

type GoogleCloudIntegrationsV1alphaExecutionSnapshot struct {
	CheckpointTaskNumber      *string                                                                   `json:"checkpointTaskNumber"`
	ExecutionSnapshotMetadata *GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadata `json:"executionSnapshotMetadata"`
	Params                    map[string]GoogleCloudIntegrationsV1alphaValueType                        `json:"params"`
	TaskExecutionDetails      []GoogleCloudIntegrationsV1alphaTaskExecutionDetails                      `json:"taskExecutionDetails"`
}
