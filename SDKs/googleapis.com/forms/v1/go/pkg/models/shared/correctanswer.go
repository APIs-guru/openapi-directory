package shared

// CorrectAnswer
// A single correct answer for a question. For multiple-valued (`CHECKBOX`) questions, several `CorrectAnswer`s may be needed to represent a single correct response option.
type CorrectAnswer struct {
	Value *string `json:"value,omitempty"`
}
