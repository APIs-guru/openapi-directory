package shared

type DocumentationRule struct {
	DeprecationDescription *string `json:"deprecationDescription"`
	Description            *string `json:"description"`
	Selector               *string `json:"selector"`
}
