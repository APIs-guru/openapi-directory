package shared

// Value
// Definition of a single value with generic type.
type Value struct {
	BooleanValue   *bool    `json:"booleanValue,omitempty"`
	DateValue      *Date    `json:"dateValue,omitempty"`
	DoubleValue    *float64 `json:"doubleValue,omitempty"`
	IntegerValue   *string  `json:"integerValue,omitempty"`
	StringValue    *string  `json:"stringValue,omitempty"`
	TimestampValue *string  `json:"timestampValue,omitempty"`
}
