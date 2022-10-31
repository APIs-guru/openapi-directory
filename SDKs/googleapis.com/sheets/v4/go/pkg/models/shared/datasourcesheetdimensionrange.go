package shared

type DataSourceSheetDimensionRange struct {
	ColumnReferences []DataSourceColumnReference `json:"columnReferences,omitempty"`
	SheetID          *int32                      `json:"sheetId,omitempty"`
}
