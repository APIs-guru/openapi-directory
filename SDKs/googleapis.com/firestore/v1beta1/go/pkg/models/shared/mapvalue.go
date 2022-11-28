package shared

// MapValue
// A map value.
type MapValue struct {
	Fields map[string]Value `json:"fields,omitempty"`
}
