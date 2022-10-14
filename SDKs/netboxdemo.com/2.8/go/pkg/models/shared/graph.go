package shared

type GraphTemplateLanguageTemplateLanguageEnum string

const (
	GraphTemplateLanguageTemplateLanguageEnumDjango GraphTemplateLanguageTemplateLanguageEnum = "django"
	GraphTemplateLanguageTemplateLanguageEnumJinja2 GraphTemplateLanguageTemplateLanguageEnum = "jinja2"
)

type Graph struct {
	ID               *int64                                     `json:"id,omitempty"`
	Link             *string                                    `json:"link,omitempty"`
	Name             string                                     `json:"name"`
	Source           string                                     `json:"source"`
	TemplateLanguage *GraphTemplateLanguageTemplateLanguageEnum `json:"template_language,omitempty"`
	Type             string                                     `json:"type"`
	Weight           *int64                                     `json:"weight,omitempty"`
}
