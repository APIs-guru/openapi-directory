package shared

type RuntimeEntitySchema struct {
	Entity *string `json:"entity"`
	Fields []Field `json:"fields"`
}
