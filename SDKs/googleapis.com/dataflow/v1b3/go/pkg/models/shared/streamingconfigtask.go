package shared

type StreamingConfigTask struct {
	CommitStreamChunkSizeBytes   *string                      `json:"commitStreamChunkSizeBytes,omitempty"`
	GetDataStreamChunkSizeBytes  *string                      `json:"getDataStreamChunkSizeBytes,omitempty"`
	MaxWorkItemCommitBytes       *string                      `json:"maxWorkItemCommitBytes,omitempty"`
	StreamingComputationConfigs  []StreamingComputationConfig `json:"streamingComputationConfigs,omitempty"`
	UserStepToStateFamilyNameMap map[string]string            `json:"userStepToStateFamilyNameMap,omitempty"`
	WindmillServiceEndpoint      *string                      `json:"windmillServiceEndpoint,omitempty"`
	WindmillServicePort          *string                      `json:"windmillServicePort,omitempty"`
}
