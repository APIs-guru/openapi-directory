package shared

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
