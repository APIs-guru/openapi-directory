package shared

// CandlestickDomain
// The domain of a CandlestickChart.
type CandlestickDomain struct {
	Data     *ChartData `json:"data,omitempty"`
	Reversed *bool      `json:"reversed,omitempty"`
}
