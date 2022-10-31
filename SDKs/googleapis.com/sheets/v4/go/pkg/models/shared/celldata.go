package shared

type CellData struct {
	DataSourceFormula *DataSourceFormula  `json:"dataSourceFormula,omitempty"`
	DataSourceTable   *DataSourceTable    `json:"dataSourceTable,omitempty"`
	DataValidation    *DataValidationRule `json:"dataValidation,omitempty"`
	EffectiveFormat   *CellFormat         `json:"effectiveFormat,omitempty"`
	EffectiveValue    *ExtendedValue      `json:"effectiveValue,omitempty"`
	FormattedValue    *string             `json:"formattedValue,omitempty"`
	Hyperlink         *string             `json:"hyperlink,omitempty"`
	Note              *string             `json:"note,omitempty"`
	PivotTable        *PivotTable         `json:"pivotTable,omitempty"`
	TextFormatRuns    []TextFormatRun     `json:"textFormatRuns,omitempty"`
	UserEnteredFormat *CellFormat         `json:"userEnteredFormat,omitempty"`
	UserEnteredValue  *ExtendedValue      `json:"userEnteredValue,omitempty"`
}
