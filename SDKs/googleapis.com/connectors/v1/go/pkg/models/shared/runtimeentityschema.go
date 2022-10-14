package shared

type RuntimeEntitySchema struct {
	Entity *string `json:"entity,omitempty"`
	Fields []Field `json:"fields,omitempty"`
}
