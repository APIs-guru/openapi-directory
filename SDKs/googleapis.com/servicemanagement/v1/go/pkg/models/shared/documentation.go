package shared

type Documentation struct {
	DocumentationRootURL *string             `json:"documentationRootUrl"`
	Overview             *string             `json:"overview"`
	Pages                []Page              `json:"pages"`
	Rules                []DocumentationRule `json:"rules"`
	ServiceRootURL       *string             `json:"serviceRootUrl"`
	Summary              *string             `json:"summary"`
}
