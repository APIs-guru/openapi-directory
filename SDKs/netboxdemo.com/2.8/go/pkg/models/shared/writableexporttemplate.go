package shared

type WritableExportTemplateTemplateLanguageTemplateLanguageEnum string

const (
	WritableExportTemplateTemplateLanguageTemplateLanguageEnumDjango WritableExportTemplateTemplateLanguageTemplateLanguageEnum = "django"
	WritableExportTemplateTemplateLanguageTemplateLanguageEnumJinja2 WritableExportTemplateTemplateLanguageTemplateLanguageEnum = "jinja2"
)

type WritableExportTemplate struct {
	ContentType      string                                                      `json:"content_type"`
	Description      *string                                                     `json:"description"`
	FileExtension    *string                                                     `json:"file_extension"`
	ID               *int64                                                      `json:"id"`
	MimeType         *string                                                     `json:"mime_type"`
	Name             string                                                      `json:"name"`
	TemplateCode     string                                                      `json:"template_code"`
	TemplateLanguage *WritableExportTemplateTemplateLanguageTemplateLanguageEnum `json:"template_language"`
}
