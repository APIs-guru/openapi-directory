package shared

// DataSourceColumn
// A column in a data source.
type DataSourceColumn struct {
	Formula   *string                    `json:"formula,omitempty"`
	Reference *DataSourceColumnReference `json:"reference,omitempty"`
}
