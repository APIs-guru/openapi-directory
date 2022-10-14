package shared

type DataSourceChartProperties struct {
	DataExecutionStatus *DataExecutionStatus `json:"dataExecutionStatus,omitempty"`
	DataSourceID        *string              `json:"dataSourceId,omitempty"`
}
