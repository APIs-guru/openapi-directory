package shared

type ExtendedValue struct {
	BoolValue    *bool       `json:"boolValue"`
	ErrorValue   *ErrorValue `json:"errorValue"`
	FormulaValue *string     `json:"formulaValue"`
	NumberValue  *float64    `json:"numberValue"`
	StringValue  *string     `json:"stringValue"`
}
