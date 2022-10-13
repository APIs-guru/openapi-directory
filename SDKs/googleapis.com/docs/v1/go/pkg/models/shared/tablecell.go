package shared

type TableCell struct {
	Content                        []StructuralElement                `json:"content"`
	EndIndex                       *int32                             `json:"endIndex"`
	StartIndex                     *int32                             `json:"startIndex"`
	SuggestedDeletionIds           []string                           `json:"suggestedDeletionIds"`
	SuggestedInsertionIds          []string                           `json:"suggestedInsertionIds"`
	SuggestedTableCellStyleChanges map[string]SuggestedTableCellStyle `json:"suggestedTableCellStyleChanges"`
	TableCellStyle                 *TableCellStyle                    `json:"tableCellStyle"`
}
