package shared

type TextRun struct {
	Content *string    `json:"content"`
	Style   *TextStyle `json:"style"`
}
