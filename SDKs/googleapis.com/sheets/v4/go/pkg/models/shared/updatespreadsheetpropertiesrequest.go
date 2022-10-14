package shared

type UpdateSpreadsheetPropertiesRequest struct {
	Fields     *string                `json:"fields,omitempty"`
	Properties *SpreadsheetProperties `json:"properties,omitempty"`
}
