package shared

type MapTask struct {
	CounterPrefix *string               `json:"counterPrefix,omitempty"`
	Instructions  []ParallelInstruction `json:"instructions,omitempty"`
	StageName     *string               `json:"stageName,omitempty"`
	SystemName    *string               `json:"systemName,omitempty"`
}
