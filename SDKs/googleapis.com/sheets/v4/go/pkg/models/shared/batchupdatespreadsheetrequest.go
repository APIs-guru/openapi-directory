package shared

type BatchUpdateSpreadsheetRequest struct {
	IncludeSpreadsheetInResponse *bool     `json:"includeSpreadsheetInResponse,omitempty"`
	Requests                     []Request `json:"requests,omitempty"`
	ResponseIncludeGridData      *bool     `json:"responseIncludeGridData,omitempty"`
	ResponseRanges               []string  `json:"responseRanges,omitempty"`
}
