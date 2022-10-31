package shared

type Scorecard struct {
	GaugeView       *GaugeView       `json:"gaugeView,omitempty"`
	SparkChartView  *SparkChartView  `json:"sparkChartView,omitempty"`
	Thresholds      []Threshold      `json:"thresholds,omitempty"`
	TimeSeriesQuery *TimeSeriesQuery `json:"timeSeriesQuery,omitempty"`
}
