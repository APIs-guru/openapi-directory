package shared

type NamedProperty struct {
	BooleanValue    *bool            `json:"booleanValue"`
	DateValues      *DateValues      `json:"dateValues"`
	DoubleValues    *DoubleValues    `json:"doubleValues"`
	EnumValues      *EnumValues      `json:"enumValues"`
	HTMLValues      *HTMLValues      `json:"htmlValues"`
	IntegerValues   *IntegerValues   `json:"integerValues"`
	Name            *string          `json:"name"`
	ObjectValues    *ObjectValues    `json:"objectValues"`
	TextValues      *TextValues      `json:"textValues"`
	TimestampValues *TimestampValues `json:"timestampValues"`
}
