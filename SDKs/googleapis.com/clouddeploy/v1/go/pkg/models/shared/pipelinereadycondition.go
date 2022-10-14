package shared

type PipelineReadyCondition struct {
	Status     *bool   `json:"status,omitempty"`
	UpdateTime *string `json:"updateTime,omitempty"`
}
