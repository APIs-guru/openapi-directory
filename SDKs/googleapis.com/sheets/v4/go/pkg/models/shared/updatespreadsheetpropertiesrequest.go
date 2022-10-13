package shared

type UpdateSpreadsheetPropertiesRequest struct {
	Fields     *string                `json:"fields"`
	Properties *SpreadsheetProperties `json:"properties"`
}
