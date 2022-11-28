package shared

// UpdateSheetPropertiesRequest
// Updates properties of the sheet with the specified sheetId.
type UpdateSheetPropertiesRequest struct {
	Fields     *string          `json:"fields,omitempty"`
	Properties *SheetProperties `json:"properties,omitempty"`
}
