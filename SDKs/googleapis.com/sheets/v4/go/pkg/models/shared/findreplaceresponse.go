package shared

// FindReplaceResponse
// The result of the find/replace.
type FindReplaceResponse struct {
	FormulasChanged    *int32 `json:"formulasChanged,omitempty"`
	OccurrencesChanged *int32 `json:"occurrencesChanged,omitempty"`
	RowsChanged        *int32 `json:"rowsChanged,omitempty"`
	SheetsChanged      *int32 `json:"sheetsChanged,omitempty"`
	ValuesChanged      *int32 `json:"valuesChanged,omitempty"`
}
