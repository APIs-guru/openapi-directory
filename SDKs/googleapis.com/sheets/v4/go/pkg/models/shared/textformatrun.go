package shared

// TextFormatRun
// A run of a text format. The format of this run continues until the start index of the next run. When updating, all fields must be set.
type TextFormatRun struct {
	Format     *TextFormat `json:"format,omitempty"`
	StartIndex *int32      `json:"startIndex,omitempty"`
}
