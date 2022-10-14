package shared

type WritableExportTemplateTemplateLanguageTemplateLanguageEnum string

const (
	WritableExportTemplateTemplateLanguageTemplateLanguageEnumDjango WritableExportTemplateTemplateLanguageTemplateLanguageEnum = "django"
	WritableExportTemplateTemplateLanguageTemplateLanguageEnumJinja2 WritableExportTemplateTemplateLanguageTemplateLanguageEnum = "jinja2"
)

type WritableExportTemplate struct {
	ContentType      string                                                      `json:"content_type"`
	Description      *string                                                     `json:"description,omitempty"`
	FileExtension    *string                                                     `json:"file_extension,omitempty"`
	ID               *int64                                                      `json:"id,omitempty"`
	MimeType         *string                                                     `json:"mime_type,omitempty"`
	Name             string                                                      `json:"name"`
	TemplateCode     string                                                      `json:"template_code"`
	TemplateLanguage *WritableExportTemplateTemplateLanguageTemplateLanguageEnum `json:"template_language,omitempty"`
}
