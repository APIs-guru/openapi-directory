package shared



type PipelineCondition struct {
    PipelineReadyCondition *PipelineReadyCondition `json:"pipelineReadyCondition,omitempty"`
    TargetsPresentCondition *TargetsPresentCondition `json:"targetsPresentCondition,omitempty"`
    
}

