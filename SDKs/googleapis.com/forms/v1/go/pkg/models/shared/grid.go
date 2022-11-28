package shared

// Grid
// A grid of choices (radio or check boxes) with each row constituting a separate question. Each row has the same choices, which are shown as the columns.
type Grid struct {
	Columns          *ChoiceQuestion `json:"columns,omitempty"`
	ShuffleQuestions *bool           `json:"shuffleQuestions,omitempty"`
}

// GridInput
// A grid of choices (radio or check boxes) with each row constituting a separate question. Each row has the same choices, which are shown as the columns.
type GridInput struct {
	Columns          *ChoiceQuestionInput `json:"columns,omitempty"`
	ShuffleQuestions *bool                `json:"shuffleQuestions,omitempty"`
}
