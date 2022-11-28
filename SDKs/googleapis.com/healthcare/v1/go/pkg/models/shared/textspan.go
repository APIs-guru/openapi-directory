package shared

// TextSpan
// A span of text in the provided document.
type TextSpan struct {
	BeginOffset *int32  `json:"beginOffset,omitempty"`
	Content     *string `json:"content,omitempty"`
}
