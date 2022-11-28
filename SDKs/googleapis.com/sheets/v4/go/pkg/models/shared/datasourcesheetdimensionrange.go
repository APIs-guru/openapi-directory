package shared

// DataSourceSheetDimensionRange
// A range along a single dimension on a DATA_SOURCE sheet.
type DataSourceSheetDimensionRange struct {
	ColumnReferences []DataSourceColumnReference `json:"columnReferences,omitempty"`
	SheetID          *int32                      `json:"sheetId,omitempty"`
}
