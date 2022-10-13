package shared

type TableRow struct {
	EndIndex                      *int32                            `json:"endIndex"`
	StartIndex                    *int32                            `json:"startIndex"`
	SuggestedDeletionIds          []string                          `json:"suggestedDeletionIds"`
	SuggestedInsertionIds         []string                          `json:"suggestedInsertionIds"`
	SuggestedTableRowStyleChanges map[string]SuggestedTableRowStyle `json:"suggestedTableRowStyleChanges"`
	TableCells                    []TableCell                       `json:"tableCells"`
	TableRowStyle                 *TableRowStyle                    `json:"tableRowStyle"`
}
