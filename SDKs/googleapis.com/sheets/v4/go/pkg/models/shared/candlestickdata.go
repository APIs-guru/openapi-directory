package shared

type CandlestickData struct {
	CloseSeries *CandlestickSeries `json:"closeSeries"`
	HighSeries  *CandlestickSeries `json:"highSeries"`
	LowSeries   *CandlestickSeries `json:"lowSeries"`
	OpenSeries  *CandlestickSeries `json:"openSeries"`
}
