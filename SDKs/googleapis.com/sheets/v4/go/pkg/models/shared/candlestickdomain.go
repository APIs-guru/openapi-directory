package shared

type CandlestickDomain struct {
	Data     *ChartData `json:"data"`
	Reversed *bool      `json:"reversed"`
}
