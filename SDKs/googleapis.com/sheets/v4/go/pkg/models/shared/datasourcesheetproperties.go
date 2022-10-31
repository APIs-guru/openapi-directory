package shared



type DataSourceSheetProperties struct {
    Columns []DataSourceColumn `json:"columns,omitempty"`
    DataExecutionStatus *DataExecutionStatus `json:"dataExecutionStatus,omitempty"`
    DataSourceID *string `json:"dataSourceId,omitempty"`
    
}

