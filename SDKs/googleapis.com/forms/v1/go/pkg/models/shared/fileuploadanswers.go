package shared

// FileUploadAnswers
// All submitted files for a FileUpload question.
type FileUploadAnswers struct {
	Answers []FileUploadAnswer `json:"answers,omitempty"`
}
