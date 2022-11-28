package shared

// PipelineReadyCondition
// PipelineReadyCondition contains information around the status of the Pipeline.
type PipelineReadyCondition struct {
	Status     *bool   `json:"status,omitempty"`
	UpdateTime *string `json:"updateTime,omitempty"`
}
