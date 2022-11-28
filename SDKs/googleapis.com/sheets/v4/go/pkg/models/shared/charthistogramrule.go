package shared

// ChartHistogramRule
// Allows you to organize numeric values in a source data column into buckets of constant size.
type ChartHistogramRule struct {
	IntervalSize *float64 `json:"intervalSize,omitempty"`
	MaxValue     *float64 `json:"maxValue,omitempty"`
	MinValue     *float64 `json:"minValue,omitempty"`
}
