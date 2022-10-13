package shared

type UpdateChartSpecRequest struct {
	ChartID *int32     `json:"chartId"`
	Spec    *ChartSpec `json:"spec"`
}
