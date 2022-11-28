package shared

// PipelineDescription
// A descriptive representation of submitted pipeline as well as the executed form. This data is provided by the Dataflow service for ease of visualizing the pipeline and interpreting Dataflow provided metrics.
type PipelineDescription struct {
	DisplayData               []DisplayData           `json:"displayData,omitempty"`
	ExecutionPipelineStage    []ExecutionStageSummary `json:"executionPipelineStage,omitempty"`
	OriginalPipelineTransform []TransformSummary      `json:"originalPipelineTransform,omitempty"`
	StepNamesHash             *string                 `json:"stepNamesHash,omitempty"`
}
