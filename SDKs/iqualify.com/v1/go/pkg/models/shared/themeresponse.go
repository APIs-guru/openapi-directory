package shared

type ThemeResponse struct {
	Filter            *string `json:"filter,omitempty"`
	NumberOfQuestions *string `json:"numberOfQuestions,omitempty"`
}
