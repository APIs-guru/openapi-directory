package shared

// ResultTableColumnHeader
// The description of a column of the result table.
type ResultTableColumnHeader struct {
	ColumnType *string `json:"columnType,omitempty"`
	DataType   *string `json:"dataType,omitempty"`
	Name       *string `json:"name,omitempty"`
}
