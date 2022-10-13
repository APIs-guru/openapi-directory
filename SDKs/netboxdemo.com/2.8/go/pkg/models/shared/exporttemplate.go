package shared

type ExportTemplateTemplateLanguageLabelEnum string

const (
	ExportTemplateTemplateLanguageLabelEnumDjango ExportTemplateTemplateLanguageLabelEnum = "Django"
	ExportTemplateTemplateLanguageLabelEnumJinja2 ExportTemplateTemplateLanguageLabelEnum = "Jinja2"
)

type ExportTemplateTemplateLanguageValueEnum string

const (
	ExportTemplateTemplateLanguageValueEnumDjango ExportTemplateTemplateLanguageValueEnum = "django"
	ExportTemplateTemplateLanguageValueEnumJinja2 ExportTemplateTemplateLanguageValueEnum = "jinja2"
)

type ExportTemplateTemplateLanguageTemplateLanguage struct {
	Label ExportTemplateTemplateLanguageLabelEnum `json:"label"`
	Value ExportTemplateTemplateLanguageValueEnum `json:"value"`
}

type ExportTemplate struct {
	ContentType      string                                          `json:"content_type"`
	Description      *string                                         `json:"description"`
	FileExtension    *string                                         `json:"file_extension"`
	ID               *int64                                          `json:"id"`
	MimeType         *string                                         `json:"mime_type"`
	Name             string                                          `json:"name"`
	TemplateCode     string                                          `json:"template_code"`
	TemplateLanguage *ExportTemplateTemplateLanguageTemplateLanguage `json:"template_language"`
}
