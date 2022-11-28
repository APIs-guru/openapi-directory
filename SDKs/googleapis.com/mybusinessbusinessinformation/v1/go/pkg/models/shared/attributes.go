package shared

// Attributes
// A container for all the attributes for a given location.
type Attributes struct {
	Attributes []Attribute `json:"attributes,omitempty"`
	Name       *string     `json:"name,omitempty"`
}

// AttributesInput
// A container for all the attributes for a given location.
type AttributesInput struct {
	Attributes []AttributeInput `json:"attributes,omitempty"`
	Name       *string          `json:"name,omitempty"`
}
