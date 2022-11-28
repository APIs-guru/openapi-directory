package shared

type FileUploadQuestionTypesEnum string

const (
	FileUploadQuestionTypesEnumFileTypeUnspecified FileUploadQuestionTypesEnum = "FILE_TYPE_UNSPECIFIED"
	FileUploadQuestionTypesEnumAny                 FileUploadQuestionTypesEnum = "ANY"
	FileUploadQuestionTypesEnumDocument            FileUploadQuestionTypesEnum = "DOCUMENT"
	FileUploadQuestionTypesEnumPresentation        FileUploadQuestionTypesEnum = "PRESENTATION"
	FileUploadQuestionTypesEnumSpreadsheet         FileUploadQuestionTypesEnum = "SPREADSHEET"
	FileUploadQuestionTypesEnumDrawing             FileUploadQuestionTypesEnum = "DRAWING"
	FileUploadQuestionTypesEnumPdf                 FileUploadQuestionTypesEnum = "PDF"
	FileUploadQuestionTypesEnumImage               FileUploadQuestionTypesEnum = "IMAGE"
	FileUploadQuestionTypesEnumVideo               FileUploadQuestionTypesEnum = "VIDEO"
	FileUploadQuestionTypesEnumAudio               FileUploadQuestionTypesEnum = "AUDIO"
)

// FileUploadQuestion
// A file upload question. The API currently does not support creating file upload questions.
type FileUploadQuestion struct {
	FolderID    *string                       `json:"folderId,omitempty"`
	MaxFileSize *string                       `json:"maxFileSize,omitempty"`
	MaxFiles    *int32                        `json:"maxFiles,omitempty"`
	Types       []FileUploadQuestionTypesEnum `json:"types,omitempty"`
}
