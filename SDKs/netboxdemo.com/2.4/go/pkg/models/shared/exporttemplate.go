package shared

type ExportTemplate struct {
	ContentType   int64   `json:"content_type"`
	Description   *string `json:"description"`
	FileExtension *string `json:"file_extension"`
	ID            *int64  `json:"id"`
	MimeType      *string `json:"mime_type"`
	Name          string  `json:"name"`
	TemplateCode  string  `json:"template_code"`
}
