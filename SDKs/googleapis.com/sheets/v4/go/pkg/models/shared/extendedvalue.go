package shared

// ExtendedValue
// The kinds of value that a cell in a spreadsheet can have.
type ExtendedValue struct {
	BoolValue    *bool       `json:"boolValue,omitempty"`
	ErrorValue   *ErrorValue `json:"errorValue,omitempty"`
	FormulaValue *string     `json:"formulaValue,omitempty"`
	NumberValue  *float64    `json:"numberValue,omitempty"`
	StringValue  *string     `json:"stringValue,omitempty"`
}
