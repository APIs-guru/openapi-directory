package shared

type PipelineDescription struct {
	DisplayData               []DisplayData           `json:"displayData"`
	ExecutionPipelineStage    []ExecutionStageSummary `json:"executionPipelineStage"`
	OriginalPipelineTransform []TransformSummary      `json:"originalPipelineTransform"`
	StepNamesHash             *string                 `json:"stepNamesHash"`
}
