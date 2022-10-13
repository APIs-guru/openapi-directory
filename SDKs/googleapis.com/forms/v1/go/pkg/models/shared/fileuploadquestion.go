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

type FileUploadQuestion struct {
	FolderID    *string                       `json:"folderId"`
	MaxFileSize *string                       `json:"maxFileSize"`
	MaxFiles    *int32                        `json:"maxFiles"`
	Types       []FileUploadQuestionTypesEnum `json:"types"`
}
