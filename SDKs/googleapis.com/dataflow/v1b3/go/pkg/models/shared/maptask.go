package shared

// MapTask
// MapTask consists of an ordered set of instructions, each of which describes one particular low-level operation for the worker to perform in order to accomplish the MapTask's WorkItem. Each instruction must appear in the list before any instructions which depends on its output.
type MapTask struct {
	CounterPrefix *string               `json:"counterPrefix,omitempty"`
	Instructions  []ParallelInstruction `json:"instructions,omitempty"`
	StageName     *string               `json:"stageName,omitempty"`
	SystemName    *string               `json:"systemName,omitempty"`
}
