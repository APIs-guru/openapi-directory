package shared

// RefreshSheetsChartRequest
// Refreshes an embedded Google Sheets chart by replacing it with the latest version of the chart from Google Sheets. NOTE: Refreshing charts requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, or drive OAuth scopes.
type RefreshSheetsChartRequest struct {
	ObjectID *string `json:"objectId,omitempty"`
}
