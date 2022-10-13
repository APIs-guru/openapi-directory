package shared

type Grid struct {
	Columns          *ChoiceQuestion `json:"columns"`
	ShuffleQuestions *bool           `json:"shuffleQuestions"`
}
