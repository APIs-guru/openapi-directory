package shared

// AddChartResponse
// The result of adding a chart to a spreadsheet.
type AddChartResponse struct {
	Chart *EmbeddedChart `json:"chart,omitempty"`
}
