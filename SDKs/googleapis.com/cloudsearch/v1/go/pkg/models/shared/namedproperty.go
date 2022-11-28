package shared

// NamedProperty
// A typed name-value pair for structured data. The type of the value should be the same as the registered type for the `name` property in the object definition of `objectType`.
type NamedProperty struct {
	BooleanValue    *bool            `json:"booleanValue,omitempty"`
	DateValues      *DateValues      `json:"dateValues,omitempty"`
	DoubleValues    *DoubleValues    `json:"doubleValues,omitempty"`
	EnumValues      *EnumValues      `json:"enumValues,omitempty"`
	HTMLValues      *HTMLValues      `json:"htmlValues,omitempty"`
	IntegerValues   *IntegerValues   `json:"integerValues,omitempty"`
	Name            *string          `json:"name,omitempty"`
	ObjectValues    *ObjectValues    `json:"objectValues,omitempty"`
	TextValues      *TextValues      `json:"textValues,omitempty"`
	TimestampValues *TimestampValues `json:"timestampValues,omitempty"`
}
