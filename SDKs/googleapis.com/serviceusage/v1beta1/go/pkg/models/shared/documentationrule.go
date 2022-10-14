package shared

type DocumentationRule struct {
	DeprecationDescription *string `json:"deprecationDescription,omitempty"`
	Description            *string `json:"description,omitempty"`
	Selector               *string `json:"selector,omitempty"`
}
