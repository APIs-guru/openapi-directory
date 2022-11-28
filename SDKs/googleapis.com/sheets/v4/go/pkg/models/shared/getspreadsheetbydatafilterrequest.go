package shared

// GetSpreadsheetByDataFilterRequest
// The request for retrieving a Spreadsheet.
type GetSpreadsheetByDataFilterRequest struct {
	DataFilters     []DataFilter `json:"dataFilters,omitempty"`
	IncludeGridData *bool        `json:"includeGridData,omitempty"`
}
