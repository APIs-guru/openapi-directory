package shared

type Documentation struct {
	DocumentationRootURL *string             `json:"documentationRootUrl,omitempty"`
	Overview             *string             `json:"overview,omitempty"`
	Pages                []Page              `json:"pages,omitempty"`
	Rules                []DocumentationRule `json:"rules,omitempty"`
	ServiceRootURL       *string             `json:"serviceRootUrl,omitempty"`
	Summary              *string             `json:"summary,omitempty"`
}
