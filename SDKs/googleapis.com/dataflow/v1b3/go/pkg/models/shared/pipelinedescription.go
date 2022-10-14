package shared

type PipelineDescription struct {
	DisplayData               []DisplayData           `json:"displayData,omitempty"`
	ExecutionPipelineStage    []ExecutionStageSummary `json:"executionPipelineStage,omitempty"`
	OriginalPipelineTransform []TransformSummary      `json:"originalPipelineTransform,omitempty"`
	StepNamesHash             *string                 `json:"stepNamesHash,omitempty"`
}
