package shared

// RuntimeEntitySchema
// Schema of a runtime entity.
type RuntimeEntitySchema struct {
	Entity *string `json:"entity,omitempty"`
	Fields []Field `json:"fields,omitempty"`
}
