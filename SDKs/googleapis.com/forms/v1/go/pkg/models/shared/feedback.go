package shared

// Feedback
// Feedback for a respondent about their response to a question.
type Feedback struct {
	Material []ExtraMaterial `json:"material,omitempty"`
	Text     *string         `json:"text,omitempty"`
}
