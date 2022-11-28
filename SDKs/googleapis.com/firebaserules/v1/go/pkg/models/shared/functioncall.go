package shared

// FunctionCall
// Represents a service-defined function call that was invoked during test execution.
type FunctionCall struct {
	Args     []interface{} `json:"args,omitempty"`
	Function *string       `json:"function,omitempty"`
}
