package shared

type CandlestickData struct {
	CloseSeries *CandlestickSeries `json:"closeSeries,omitempty"`
	HighSeries  *CandlestickSeries `json:"highSeries,omitempty"`
	LowSeries   *CandlestickSeries `json:"lowSeries,omitempty"`
	OpenSeries  *CandlestickSeries `json:"openSeries,omitempty"`
}
