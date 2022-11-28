package shared

// DataSourceSheetProperties
// Additional properties of a DATA_SOURCE sheet.
type DataSourceSheetProperties struct {
	Columns             []DataSourceColumn   `json:"columns,omitempty"`
	DataExecutionStatus *DataExecutionStatus `json:"dataExecutionStatus,omitempty"`
	DataSourceID        *string              `json:"dataSourceId,omitempty"`
}
