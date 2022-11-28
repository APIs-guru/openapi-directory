package shared

// UpdateTextStyleRequest
// Update the styling of text.
type UpdateTextStyleRequest struct {
	Fields    *string    `json:"fields,omitempty"`
	Range     *Range     `json:"range,omitempty"`
	TextStyle *TextStyle `json:"textStyle,omitempty"`
}
