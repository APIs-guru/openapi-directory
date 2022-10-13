package shared

type GridData struct {
	ColumnMetadata []DimensionProperties `json:"columnMetadata"`
	RowData        []RowData             `json:"rowData"`
	RowMetadata    []DimensionProperties `json:"rowMetadata"`
	StartColumn    *int32                `json:"startColumn"`
	StartRow       *int32                `json:"startRow"`
}
