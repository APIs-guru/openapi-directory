package shared

type CandlestickChartSpec struct {
	Data   []CandlestickData  `json:"data"`
	Domain *CandlestickDomain `json:"domain"`
}
