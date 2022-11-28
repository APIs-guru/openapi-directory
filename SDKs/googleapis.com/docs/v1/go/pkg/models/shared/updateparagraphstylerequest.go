package shared

// UpdateParagraphStyleRequest
// Update the styling of all paragraphs that overlap with the given range.
type UpdateParagraphStyleRequest struct {
	Fields         *string         `json:"fields,omitempty"`
	ParagraphStyle *ParagraphStyle `json:"paragraphStyle,omitempty"`
	Range          *Range          `json:"range,omitempty"`
}
