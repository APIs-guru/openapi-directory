package shared

type StreamingComputationConfig struct {
	ComputationID                  *string               `json:"computationId,omitempty"`
	Instructions                   []ParallelInstruction `json:"instructions,omitempty"`
	StageName                      *string               `json:"stageName,omitempty"`
	SystemName                     *string               `json:"systemName,omitempty"`
	TransformUserNameToStateFamily map[string]string     `json:"transformUserNameToStateFamily,omitempty"`
}
