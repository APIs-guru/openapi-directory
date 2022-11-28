package shared

// QuizSettings
// Settings related to quiz forms and grading. These must be updated with the UpdateSettingsRequest.
type QuizSettings struct {
	IsQuiz *bool `json:"isQuiz,omitempty"`
}
