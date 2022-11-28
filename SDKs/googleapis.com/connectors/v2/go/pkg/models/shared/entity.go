package shared

// Entity
// 'Entity row'/ 'Entity' refers to a single row of an entity type.
type Entity struct {
	Fields map[string]interface{} `json:"fields,omitempty"`
	Name   *string                `json:"name,omitempty"`
}

// EntityInput
// 'Entity row'/ 'Entity' refers to a single row of an entity type.
type EntityInput struct {
	Fields map[string]interface{} `json:"fields,omitempty"`
}
