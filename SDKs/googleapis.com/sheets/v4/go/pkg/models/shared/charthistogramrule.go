package shared

type ChartHistogramRule struct {
	IntervalSize *float64 `json:"intervalSize"`
	MaxValue     *float64 `json:"maxValue"`
	MinValue     *float64 `json:"minValue"`
}
