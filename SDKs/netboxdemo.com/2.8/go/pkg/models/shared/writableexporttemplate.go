package shared




type WritableExportTemplateTemplateLanguageEnum string

const (
    WritableExportTemplateTemplateLanguageEnumDjango WritableExportTemplateTemplateLanguageEnum = "django"
WritableExportTemplateTemplateLanguageEnumJinja2 WritableExportTemplateTemplateLanguageEnum = "jinja2"
)


type WritableExportTemplate struct {
    ContentType string `json:"content_type"`
    Description *string `json:"description,omitempty"`
    FileExtension *string `json:"file_extension,omitempty"`
    ID *int64 `json:"id,omitempty"`
    MimeType *string `json:"mime_type,omitempty"`
    Name string `json:"name"`
    TemplateCode string `json:"template_code"`
    TemplateLanguage *WritableExportTemplateTemplateLanguageEnum `json:"template_language,omitempty"`
    
}

