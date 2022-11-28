package shared

// StructuredDataObject
// A structured data object consisting of named properties.
type StructuredDataObject struct {
	Properties []NamedProperty `json:"properties,omitempty"`
}
