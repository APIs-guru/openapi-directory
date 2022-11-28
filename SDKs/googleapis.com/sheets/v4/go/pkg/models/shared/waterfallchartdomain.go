package shared

// WaterfallChartDomain
// The domain of a waterfall chart.
type WaterfallChartDomain struct {
	Data     *ChartData `json:"data,omitempty"`
	Reversed *bool      `json:"reversed,omitempty"`
}
