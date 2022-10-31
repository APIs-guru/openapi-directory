package shared

type ResultTableColumnHeader struct {
	ColumnType *string `json:"columnType,omitempty"`
	DataType   *string `json:"dataType,omitempty"`
	Name       *string `json:"name,omitempty"`
}
