package shared

type DataSourceSheetDimensionRange struct {
	ColumnReferences []DataSourceColumnReference `json:"columnReferences"`
	SheetID          *int32                      `json:"sheetId"`
}
