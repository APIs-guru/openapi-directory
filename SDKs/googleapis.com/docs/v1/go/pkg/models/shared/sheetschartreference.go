package shared

type SheetsChartReference struct {
	ChartID       *int32  `json:"chartId"`
	SpreadsheetID *string `json:"spreadsheetId"`
}
