package shared

type TimeSeriesTableMetricVisualizationEnum string

const (
	TimeSeriesTableMetricVisualizationEnumMetricVisualizationUnspecified TimeSeriesTableMetricVisualizationEnum = "METRIC_VISUALIZATION_UNSPECIFIED"
	TimeSeriesTableMetricVisualizationEnumNumber                         TimeSeriesTableMetricVisualizationEnum = "NUMBER"
	TimeSeriesTableMetricVisualizationEnumBar                            TimeSeriesTableMetricVisualizationEnum = "BAR"
)

type TimeSeriesTable struct {
	DataSets            []TableDataSet                          `json:"dataSets,omitempty"`
	MetricVisualization *TimeSeriesTableMetricVisualizationEnum `json:"metricVisualization,omitempty"`
}
