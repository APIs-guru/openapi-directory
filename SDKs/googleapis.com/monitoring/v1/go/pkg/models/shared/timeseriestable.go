package shared

type TimeSeriesTableMetricVisualizationEnum string

const (
	TimeSeriesTableMetricVisualizationEnumMetricVisualizationUnspecified TimeSeriesTableMetricVisualizationEnum = "METRIC_VISUALIZATION_UNSPECIFIED"
	TimeSeriesTableMetricVisualizationEnumNumber                         TimeSeriesTableMetricVisualizationEnum = "NUMBER"
	TimeSeriesTableMetricVisualizationEnumBar                            TimeSeriesTableMetricVisualizationEnum = "BAR"
)

// TimeSeriesTable
// A table that displays time series data.
type TimeSeriesTable struct {
	ColumnSettings      []ColumnSettings                        `json:"columnSettings,omitempty"`
	DataSets            []TableDataSet                          `json:"dataSets,omitempty"`
	MetricVisualization *TimeSeriesTableMetricVisualizationEnum `json:"metricVisualization,omitempty"`
}
