package shared

// AddChartRequest
// Adds a chart to a sheet in the spreadsheet.
type AddChartRequest struct {
	Chart *EmbeddedChart `json:"chart,omitempty"`
}
