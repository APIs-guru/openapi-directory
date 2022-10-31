package shared

type BooksAnnotationsRange struct {
	EndOffset     *string `json:"endOffset,omitempty"`
	EndPosition   *string `json:"endPosition,omitempty"`
	StartOffset   *string `json:"startOffset,omitempty"`
	StartPosition *string `json:"startPosition,omitempty"`
}
