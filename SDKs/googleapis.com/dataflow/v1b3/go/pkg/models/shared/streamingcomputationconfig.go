package shared

type StreamingComputationConfig struct {
	ComputationID                  *string               `json:"computationId"`
	Instructions                   []ParallelInstruction `json:"instructions"`
	StageName                      *string               `json:"stageName"`
	SystemName                     *string               `json:"systemName"`
	TransformUserNameToStateFamily map[string]string     `json:"transformUserNameToStateFamily"`
}
