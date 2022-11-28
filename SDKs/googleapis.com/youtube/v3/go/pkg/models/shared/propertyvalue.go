package shared

// PropertyValue
// A pair Property / Value.
type PropertyValue struct {
	Property *string `json:"property,omitempty"`
	Value    *string `json:"value,omitempty"`
}
