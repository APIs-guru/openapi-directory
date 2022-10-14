package shared

type TextFormatRun struct {
	Format     *TextFormat `json:"format,omitempty"`
	StartIndex *int32      `json:"startIndex,omitempty"`
}
