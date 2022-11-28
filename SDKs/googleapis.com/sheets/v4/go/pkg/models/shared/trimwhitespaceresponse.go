package shared

// TrimWhitespaceResponse
// The result of trimming whitespace in cells.
type TrimWhitespaceResponse struct {
	CellsChangedCount *int32 `json:"cellsChangedCount,omitempty"`
}
