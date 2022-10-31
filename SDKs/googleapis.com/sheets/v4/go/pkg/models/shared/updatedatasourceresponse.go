package shared



type UpdateDataSourceResponse struct {
    DataExecutionStatus *DataExecutionStatus `json:"dataExecutionStatus,omitempty"`
    DataSource *DataSource `json:"dataSource,omitempty"`
    
}

