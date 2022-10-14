package shared

type UpdateSheetPropertiesRequest struct {
	Fields     *string          `json:"fields,omitempty"`
	Properties *SheetProperties `json:"properties,omitempty"`
}
