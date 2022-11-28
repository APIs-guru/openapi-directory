package shared

// Answer
// The submitted answer for a question.
type Answer struct {
	FileUploadAnswers *FileUploadAnswers `json:"fileUploadAnswers,omitempty"`
	Grade             *Grade             `json:"grade,omitempty"`
	QuestionID        *string            `json:"questionId,omitempty"`
	TextAnswers       *TextAnswers       `json:"textAnswers,omitempty"`
}
