package shared

type PipelineReadyCondition struct {
	Status     *bool   `json:"status"`
	UpdateTime *string `json:"updateTime"`
}
