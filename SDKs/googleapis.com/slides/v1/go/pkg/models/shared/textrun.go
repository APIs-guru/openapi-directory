package shared

// TextRun
// A TextElement kind that represents a run of text that all has the same styling.
type TextRun struct {
	Content *string    `json:"content,omitempty"`
	Style   *TextStyle `json:"style,omitempty"`
}
