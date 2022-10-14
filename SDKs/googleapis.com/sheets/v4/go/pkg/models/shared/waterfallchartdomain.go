package shared

type WaterfallChartDomain struct {
	Data     *ChartData `json:"data,omitempty"`
	Reversed *bool      `json:"reversed,omitempty"`
}
