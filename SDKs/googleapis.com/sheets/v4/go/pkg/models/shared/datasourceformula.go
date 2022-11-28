package shared

// DataSourceFormula
// A data source formula.
type DataSourceFormula struct {
	DataExecutionStatus *DataExecutionStatus `json:"dataExecutionStatus,omitempty"`
	DataSourceID        *string              `json:"dataSourceId,omitempty"`
}
