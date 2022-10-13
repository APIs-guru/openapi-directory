package shared

type Value struct {
	BooleanValue   *bool    `json:"booleanValue"`
	DateValue      *Date    `json:"dateValue"`
	DoubleValue    *float64 `json:"doubleValue"`
	IntegerValue   *string  `json:"integerValue"`
	StringValue    *string  `json:"stringValue"`
	TimestampValue *string  `json:"timestampValue"`
}
