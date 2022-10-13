package shared

type RefreshDataSourceObjectExecutionStatus struct {
	DataExecutionStatus *DataExecutionStatus       `json:"dataExecutionStatus"`
	Reference           *DataSourceObjectReference `json:"reference"`
}
