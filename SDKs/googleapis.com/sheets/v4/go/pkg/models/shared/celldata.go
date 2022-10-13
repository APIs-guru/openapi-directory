package shared

type CellData struct {
	DataSourceFormula *DataSourceFormula  `json:"dataSourceFormula"`
	DataSourceTable   *DataSourceTable    `json:"dataSourceTable"`
	DataValidation    *DataValidationRule `json:"dataValidation"`
	EffectiveFormat   *CellFormat         `json:"effectiveFormat"`
	EffectiveValue    *ExtendedValue      `json:"effectiveValue"`
	FormattedValue    *string             `json:"formattedValue"`
	Hyperlink         *string             `json:"hyperlink"`
	Note              *string             `json:"note"`
	PivotTable        *PivotTable         `json:"pivotTable"`
	TextFormatRuns    []TextFormatRun     `json:"textFormatRuns"`
	UserEnteredFormat *CellFormat         `json:"userEnteredFormat"`
	UserEnteredValue  *ExtendedValue      `json:"userEnteredValue"`
}
