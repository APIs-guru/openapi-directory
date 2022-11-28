package shared

// UserDefinedField
// A custom field defined by the User with a special syntax within a StackScript. Derived from the contents of the script.
type UserDefinedField struct {
	Default *string `json:"default,omitempty"`
	Example string  `json:"example"`
	Label   string  `json:"label"`
	ManyOf  *string `json:"manyOf,omitempty"`
	Name    string  `json:"name"`
	OneOf   *string `json:"oneOf,omitempty"`
}
