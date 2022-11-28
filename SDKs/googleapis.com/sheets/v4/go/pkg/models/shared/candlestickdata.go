package shared

// CandlestickData
// The Candlestick chart data, each containing the low, open, close, and high values for a series.
type CandlestickData struct {
	CloseSeries *CandlestickSeries `json:"closeSeries,omitempty"`
	HighSeries  *CandlestickSeries `json:"highSeries,omitempty"`
	LowSeries   *CandlestickSeries `json:"lowSeries,omitempty"`
	OpenSeries  *CandlestickSeries `json:"openSeries,omitempty"`
}
