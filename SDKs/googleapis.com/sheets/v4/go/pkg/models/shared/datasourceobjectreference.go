package shared

type DataSourceObjectReference struct {
	ChartID                        *int32          `json:"chartId"`
	DataSourceFormulaCell          *GridCoordinate `json:"dataSourceFormulaCell"`
	DataSourcePivotTableAnchorCell *GridCoordinate `json:"dataSourcePivotTableAnchorCell"`
	DataSourceTableAnchorCell      *GridCoordinate `json:"dataSourceTableAnchorCell"`
	SheetID                        *string         `json:"sheetId"`
}
