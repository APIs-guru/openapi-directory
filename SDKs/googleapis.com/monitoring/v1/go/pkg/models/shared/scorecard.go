package shared

type Scorecard struct {
	GaugeView       *GaugeView       `json:"gaugeView"`
	SparkChartView  *SparkChartView  `json:"sparkChartView"`
	Thresholds      []Threshold      `json:"thresholds"`
	TimeSeriesQuery *TimeSeriesQuery `json:"timeSeriesQuery"`
}
