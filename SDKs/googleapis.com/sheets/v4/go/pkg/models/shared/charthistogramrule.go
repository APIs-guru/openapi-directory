package shared

type ChartHistogramRule struct {
	IntervalSize *float64 `json:"intervalSize,omitempty"`
	MaxValue     *float64 `json:"maxValue,omitempty"`
	MinValue     *float64 `json:"minValue,omitempty"`
}
