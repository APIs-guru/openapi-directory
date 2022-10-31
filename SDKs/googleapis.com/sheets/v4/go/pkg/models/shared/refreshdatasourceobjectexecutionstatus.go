package shared



type RefreshDataSourceObjectExecutionStatus struct {
    DataExecutionStatus *DataExecutionStatus `json:"dataExecutionStatus,omitempty"`
    Reference *DataSourceObjectReference `json:"reference,omitempty"`
    
}

