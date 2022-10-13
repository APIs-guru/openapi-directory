package shared

type GraphTemplateLanguageTemplateLanguageEnum string

const (
	GraphTemplateLanguageTemplateLanguageEnumDjango GraphTemplateLanguageTemplateLanguageEnum = "django"
	GraphTemplateLanguageTemplateLanguageEnumJinja2 GraphTemplateLanguageTemplateLanguageEnum = "jinja2"
)

type Graph struct {
	ID               *int64                                     `json:"id"`
	Link             *string                                    `json:"link"`
	Name             string                                     `json:"name"`
	Source           string                                     `json:"source"`
	TemplateLanguage *GraphTemplateLanguageTemplateLanguageEnum `json:"template_language"`
	Type             string                                     `json:"type"`
	Weight           *int64                                     `json:"weight"`
}
