package shared



type TableRow struct {
    EndIndex *int32 `json:"endIndex,omitempty"`
    StartIndex *int32 `json:"startIndex,omitempty"`
    SuggestedDeletionIds []string `json:"suggestedDeletionIds,omitempty"`
    SuggestedInsertionIds []string `json:"suggestedInsertionIds,omitempty"`
    SuggestedTableRowStyleChanges map[string]SuggestedTableRowStyle `json:"suggestedTableRowStyleChanges,omitempty"`
    TableCells []TableCell `json:"tableCells,omitempty"`
    TableRowStyle *TableRowStyle `json:"tableRowStyle,omitempty"`
    
}

