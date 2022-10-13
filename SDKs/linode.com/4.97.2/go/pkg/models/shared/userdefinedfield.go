package shared

type UserDefinedField struct {
	Default *string `json:"default"`
	Example string  `json:"example"`
	Label   string  `json:"label"`
	ManyOf  *string `json:"manyOf"`
	Name    string  `json:"name"`
	OneOf   *string `json:"oneOf"`
}
