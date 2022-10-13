package shared

type DataSourceFormula struct {
	DataExecutionStatus *DataExecutionStatus `json:"dataExecutionStatus"`
	DataSourceID        *string              `json:"dataSourceId"`
}
