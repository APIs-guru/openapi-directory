package shared

type EntityType struct {
	Fields []Field `json:"fields,omitempty"`
	Name   *string `json:"name,omitempty"`
}
