package shared

// Scorecard
// A widget showing the latest value of a metric, and how this value relates to one or more thresholds.
type Scorecard struct {
	GaugeView       *GaugeView       `json:"gaugeView,omitempty"`
	SparkChartView  *SparkChartView  `json:"sparkChartView,omitempty"`
	Thresholds      []Threshold      `json:"thresholds,omitempty"`
	TimeSeriesQuery *TimeSeriesQuery `json:"timeSeriesQuery,omitempty"`
}
