package shared

// FilteringAttribute
// A representation of the FilteringAttribute resource. Filtering attributes are per event type.
type FilteringAttribute struct {
	Attribute            *string `json:"attribute,omitempty"`
	Description          *string `json:"description,omitempty"`
	PathPatternSupported *bool   `json:"pathPatternSupported,omitempty"`
	Required             *bool   `json:"required,omitempty"`
}
