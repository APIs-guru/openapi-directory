package shared



type GridData struct {
    ColumnMetadata []DimensionProperties `json:"columnMetadata,omitempty"`
    RowData []RowData `json:"rowData,omitempty"`
    RowMetadata []DimensionProperties `json:"rowMetadata,omitempty"`
    StartColumn *int32 `json:"startColumn,omitempty"`
    StartRow *int32 `json:"startRow,omitempty"`
    
}

