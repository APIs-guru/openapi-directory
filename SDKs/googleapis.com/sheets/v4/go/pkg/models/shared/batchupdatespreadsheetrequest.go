package shared

// BatchUpdateSpreadsheetRequest
// The request for updating any aspect of a spreadsheet.
type BatchUpdateSpreadsheetRequest struct {
	IncludeSpreadsheetInResponse *bool     `json:"includeSpreadsheetInResponse,omitempty"`
	Requests                     []Request `json:"requests,omitempty"`
	ResponseIncludeGridData      *bool     `json:"responseIncludeGridData,omitempty"`
	ResponseRanges               []string  `json:"responseRanges,omitempty"`
}
