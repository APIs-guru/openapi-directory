package shared

// DataSourceChartProperties
// Properties of a data source chart.
type DataSourceChartProperties struct {
	DataExecutionStatus *DataExecutionStatus `json:"dataExecutionStatus,omitempty"`
	DataSourceID        *string              `json:"dataSourceId,omitempty"`
}
