package shared

type UpdateSheetPropertiesRequest struct {
	Fields     *string          `json:"fields"`
	Properties *SheetProperties `json:"properties"`
}
