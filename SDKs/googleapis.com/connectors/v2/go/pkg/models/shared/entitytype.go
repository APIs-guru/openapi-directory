package shared

// EntityType
// EntityType message contains metadata information about a single entity type present in the external system.
type EntityType struct {
	Fields []Field `json:"fields,omitempty"`
	Name   *string `json:"name,omitempty"`
}
