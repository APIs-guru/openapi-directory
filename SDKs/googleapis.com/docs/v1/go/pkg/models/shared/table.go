package shared

// Table
// A StructuralElement representing a table.
type Table struct {
	Columns               *int32      `json:"columns,omitempty"`
	Rows                  *int32      `json:"rows,omitempty"`
	SuggestedDeletionIds  []string    `json:"suggestedDeletionIds,omitempty"`
	SuggestedInsertionIds []string    `json:"suggestedInsertionIds,omitempty"`
	TableRows             []TableRow  `json:"tableRows,omitempty"`
	TableStyle            *TableStyle `json:"tableStyle,omitempty"`
}
