package shared

// PipelineCondition
// PipelineCondition contains all conditions relevant to a Delivery Pipeline.
type PipelineCondition struct {
	PipelineReadyCondition  *PipelineReadyCondition  `json:"pipelineReadyCondition,omitempty"`
	TargetsPresentCondition *TargetsPresentCondition `json:"targetsPresentCondition,omitempty"`
}
