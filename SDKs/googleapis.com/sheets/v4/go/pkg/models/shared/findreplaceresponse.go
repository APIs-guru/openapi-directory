package shared

type FindReplaceResponse struct {
	FormulasChanged    *int32 `json:"formulasChanged"`
	OccurrencesChanged *int32 `json:"occurrencesChanged"`
	RowsChanged        *int32 `json:"rowsChanged"`
	SheetsChanged      *int32 `json:"sheetsChanged"`
	ValuesChanged      *int32 `json:"valuesChanged"`
}
