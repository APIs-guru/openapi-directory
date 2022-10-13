package shared

type SheetsChart struct {
	ChartID               *int32                 `json:"chartId"`
	ContentURL            *string                `json:"contentUrl"`
	SheetsChartProperties *SheetsChartProperties `json:"sheetsChartProperties"`
	SpreadsheetID         *string                `json:"spreadsheetId"`
}
