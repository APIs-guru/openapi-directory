package shared

// TableCell
// The contents and style of a cell in a Table.
type TableCell struct {
	Content                        []StructuralElement                `json:"content,omitempty"`
	EndIndex                       *int32                             `json:"endIndex,omitempty"`
	StartIndex                     *int32                             `json:"startIndex,omitempty"`
	SuggestedDeletionIds           []string                           `json:"suggestedDeletionIds,omitempty"`
	SuggestedInsertionIds          []string                           `json:"suggestedInsertionIds,omitempty"`
	SuggestedTableCellStyleChanges map[string]SuggestedTableCellStyle `json:"suggestedTableCellStyleChanges,omitempty"`
	TableCellStyle                 *TableCellStyle                    `json:"tableCellStyle,omitempty"`
}
