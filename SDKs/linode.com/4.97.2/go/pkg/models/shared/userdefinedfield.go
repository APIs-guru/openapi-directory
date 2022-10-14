package shared

type UserDefinedField struct {
	Default *string `json:"default,omitempty"`
	Example string  `json:"example"`
	Label   string  `json:"label"`
	ManyOf  *string `json:"manyOf,omitempty"`
	Name    string  `json:"name"`
	OneOf   *string `json:"oneOf,omitempty"`
}
