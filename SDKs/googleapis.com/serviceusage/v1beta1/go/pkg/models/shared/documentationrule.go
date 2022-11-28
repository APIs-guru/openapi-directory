package shared

// DocumentationRule
// A documentation rule provides information about individual API elements.
type DocumentationRule struct {
	DeprecationDescription *string `json:"deprecationDescription,omitempty"`
	Description            *string `json:"description,omitempty"`
	Selector               *string `json:"selector,omitempty"`
}
