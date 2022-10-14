package shared

type UpdateChartSpecRequest struct {
	ChartID *int32     `json:"chartId,omitempty"`
	Spec    *ChartSpec `json:"spec,omitempty"`
}
