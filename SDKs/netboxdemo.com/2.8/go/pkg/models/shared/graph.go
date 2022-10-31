package shared




type GraphTemplateLanguageEnum string

const (
    GraphTemplateLanguageEnumDjango GraphTemplateLanguageEnum = "django"
GraphTemplateLanguageEnumJinja2 GraphTemplateLanguageEnum = "jinja2"
)


type Graph struct {
    ID *int64 `json:"id,omitempty"`
    Link *string `json:"link,omitempty"`
    Name string `json:"name"`
    Source string `json:"source"`
    TemplateLanguage *GraphTemplateLanguageEnum `json:"template_language,omitempty"`
    Type string `json:"type"`
    Weight *int64 `json:"weight,omitempty"`
    
}

