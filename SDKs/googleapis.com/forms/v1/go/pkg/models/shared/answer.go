package shared

type Answer struct {
	FileUploadAnswers *FileUploadAnswers `json:"fileUploadAnswers"`
	Grade             *Grade             `json:"grade"`
	QuestionID        *string            `json:"questionId"`
	TextAnswers       *TextAnswers       `json:"textAnswers"`
}
