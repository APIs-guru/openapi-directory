package shared

// TextSpan
// Represents an output piece of text.
type TextSpan struct {
	BeginOffset *int32  `json:"beginOffset,omitempty"`
	Content     *string `json:"content,omitempty"`
}
