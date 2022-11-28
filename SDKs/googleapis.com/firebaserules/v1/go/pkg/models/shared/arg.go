package shared

// Arg
// Arg matchers for the mock function.
type Arg struct {
	AnyValue   map[string]interface{} `json:"anyValue,omitempty"`
	ExactValue *interface{}           `json:"exactValue,omitempty"`
}
