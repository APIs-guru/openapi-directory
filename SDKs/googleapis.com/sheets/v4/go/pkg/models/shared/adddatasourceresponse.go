package shared

// AddDataSourceResponse
// The result of adding a data source.
type AddDataSourceResponse struct {
	DataExecutionStatus *DataExecutionStatus `json:"dataExecutionStatus,omitempty"`
	DataSource          *DataSource          `json:"dataSource,omitempty"`
}
