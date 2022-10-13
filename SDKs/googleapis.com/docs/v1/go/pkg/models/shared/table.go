package shared

type Table struct {
	Columns               *int32      `json:"columns"`
	Rows                  *int32      `json:"rows"`
	SuggestedDeletionIds  []string    `json:"suggestedDeletionIds"`
	SuggestedInsertionIds []string    `json:"suggestedInsertionIds"`
	TableRows             []TableRow  `json:"tableRows"`
	TableStyle            *TableStyle `json:"tableStyle"`
}
