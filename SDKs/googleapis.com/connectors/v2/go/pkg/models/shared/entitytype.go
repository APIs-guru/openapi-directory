package shared

type EntityType struct {
	Fields []Field `json:"fields"`
	Name   *string `json:"name"`
}
