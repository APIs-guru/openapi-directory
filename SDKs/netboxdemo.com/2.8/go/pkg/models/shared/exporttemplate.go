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


type ExportTemplateTemplateLanguage struct {
    Label ExportTemplateTemplateLanguageLabelEnum `json:"label"`
    Value ExportTemplateTemplateLanguageValueEnum `json:"value"`
    
}

type ExportTemplate struct {
    ContentType string `json:"content_type"`
    Description *string `json:"description,omitempty"`
    FileExtension *string `json:"file_extension,omitempty"`
    ID *int64 `json:"id,omitempty"`
    MimeType *string `json:"mime_type,omitempty"`
    Name string `json:"name"`
    TemplateCode string `json:"template_code"`
    TemplateLanguage *ExportTemplateTemplateLanguage `json:"template_language,omitempty"`
    
}

