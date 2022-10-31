package shared

type DataSourceFormula struct {
	DataExecutionStatus *DataExecutionStatus `json:"dataExecutionStatus,omitempty"`
	DataSourceID        *string              `json:"dataSourceId,omitempty"`
}
