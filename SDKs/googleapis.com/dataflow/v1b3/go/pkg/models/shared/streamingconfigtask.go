package shared

type StreamingConfigTask struct {
	CommitStreamChunkSizeBytes   *string                      `json:"commitStreamChunkSizeBytes"`
	GetDataStreamChunkSizeBytes  *string                      `json:"getDataStreamChunkSizeBytes"`
	MaxWorkItemCommitBytes       *string                      `json:"maxWorkItemCommitBytes"`
	StreamingComputationConfigs  []StreamingComputationConfig `json:"streamingComputationConfigs"`
	UserStepToStateFamilyNameMap map[string]string            `json:"userStepToStateFamilyNameMap"`
	WindmillServiceEndpoint      *string                      `json:"windmillServiceEndpoint"`
	WindmillServicePort          *string                      `json:"windmillServicePort"`
}
