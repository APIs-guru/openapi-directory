package shared

type UpdateDataSourceResponse struct {
	DataExecutionStatus *DataExecutionStatus `json:"dataExecutionStatus"`
	DataSource          *DataSource          `json:"dataSource"`
}
