package shared

type DataSourceChartProperties struct {
	DataExecutionStatus *DataExecutionStatus `json:"dataExecutionStatus"`
	DataSourceID        *string              `json:"dataSourceId"`
}
