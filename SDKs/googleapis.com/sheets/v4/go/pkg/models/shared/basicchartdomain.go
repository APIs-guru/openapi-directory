package shared

// BasicChartDomain
// The domain of a chart. For example, if charting stock prices over time, this would be the date.
type BasicChartDomain struct {
	Domain   *ChartData `json:"domain,omitempty"`
	Reversed *bool      `json:"reversed,omitempty"`
}
