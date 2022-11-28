package shared

// DataSourceObjectReference
// Reference to a data source object.
type DataSourceObjectReference struct {
	ChartID                        *int32          `json:"chartId,omitempty"`
	DataSourceFormulaCell          *GridCoordinate `json:"dataSourceFormulaCell,omitempty"`
	DataSourcePivotTableAnchorCell *GridCoordinate `json:"dataSourcePivotTableAnchorCell,omitempty"`
	DataSourceTableAnchorCell      *GridCoordinate `json:"dataSourceTableAnchorCell,omitempty"`
	SheetID                        *string         `json:"sheetId,omitempty"`
}
