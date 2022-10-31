package shared



type Grid struct {
    Columns *ChoiceQuestion `json:"columns,omitempty"`
    ShuffleQuestions *bool `json:"shuffleQuestions,omitempty"`
    
}

