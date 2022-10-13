package shared

type BatchUpdateSpreadsheetRequest struct {
	IncludeSpreadsheetInResponse *bool     `json:"includeSpreadsheetInResponse"`
	Requests                     []Request `json:"requests"`
	ResponseIncludeGridData      *bool     `json:"responseIncludeGridData"`
	ResponseRanges               []string  `json:"responseRanges"`
}
