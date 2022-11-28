package shared

// UpdateSpreadsheetPropertiesRequest
// Updates properties of a spreadsheet.
type UpdateSpreadsheetPropertiesRequest struct {
	Fields     *string                `json:"fields,omitempty"`
	Properties *SpreadsheetProperties `json:"properties,omitempty"`
}
