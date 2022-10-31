package shared



type AddDataSourceResponse struct {
    DataExecutionStatus *DataExecutionStatus `json:"dataExecutionStatus,omitempty"`
    DataSource *DataSource `json:"dataSource,omitempty"`
    
}

