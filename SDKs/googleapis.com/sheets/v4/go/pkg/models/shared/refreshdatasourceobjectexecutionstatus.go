package shared

// RefreshDataSourceObjectExecutionStatus
// The execution status of refreshing one data source object.
type RefreshDataSourceObjectExecutionStatus struct {
	DataExecutionStatus *DataExecutionStatus       `json:"dataExecutionStatus,omitempty"`
	Reference           *DataSourceObjectReference `json:"reference,omitempty"`
}
