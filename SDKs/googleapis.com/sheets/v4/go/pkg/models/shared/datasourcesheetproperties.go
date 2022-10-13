package shared

type DataSourceSheetProperties struct {
	Columns             []DataSourceColumn   `json:"columns"`
	DataExecutionStatus *DataExecutionStatus `json:"dataExecutionStatus"`
	DataSourceID        *string              `json:"dataSourceId"`
}
