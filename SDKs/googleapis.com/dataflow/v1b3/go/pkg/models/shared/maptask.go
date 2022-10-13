package shared

type MapTask struct {
	CounterPrefix *string               `json:"counterPrefix"`
	Instructions  []ParallelInstruction `json:"instructions"`
	StageName     *string               `json:"stageName"`
	SystemName    *string               `json:"systemName"`
}
