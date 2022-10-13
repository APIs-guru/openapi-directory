package shared

type WaterfallChartDomain struct {
	Data     *ChartData `json:"data"`
	Reversed *bool      `json:"reversed"`
}
