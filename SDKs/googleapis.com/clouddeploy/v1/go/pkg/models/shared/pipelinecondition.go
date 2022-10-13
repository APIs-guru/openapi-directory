package shared

type PipelineCondition struct {
	PipelineReadyCondition  *PipelineReadyCondition  `json:"pipelineReadyCondition"`
	TargetsPresentCondition *TargetsPresentCondition `json:"targetsPresentCondition"`
}
