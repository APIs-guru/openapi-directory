package shared

type AddDataSourceResponse struct {
	DataExecutionStatus *DataExecutionStatus `json:"dataExecutionStatus"`
	DataSource          *DataSource          `json:"dataSource"`
}
