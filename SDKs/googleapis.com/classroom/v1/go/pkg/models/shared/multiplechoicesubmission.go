package shared

// MultipleChoiceSubmission
// Student work for a multiple-choice question.
type MultipleChoiceSubmission struct {
	Answer *string `json:"answer,omitempty"`
}
