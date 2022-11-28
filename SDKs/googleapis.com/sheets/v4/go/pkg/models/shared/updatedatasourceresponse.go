package shared

// UpdateDataSourceResponse
// The response from updating data source.
type UpdateDataSourceResponse struct {
	DataExecutionStatus *DataExecutionStatus `json:"dataExecutionStatus,omitempty"`
	DataSource          *DataSource          `json:"dataSource,omitempty"`
}
