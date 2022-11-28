package shared

// SheetsChart
// A PageElement kind representing a linked chart embedded from Google Sheets.
type SheetsChart struct {
	ChartID               *int32                 `json:"chartId,omitempty"`
	ContentURL            *string                `json:"contentUrl,omitempty"`
	SheetsChartProperties *SheetsChartProperties `json:"sheetsChartProperties,omitempty"`
	SpreadsheetID         *string                `json:"spreadsheetId,omitempty"`
}
