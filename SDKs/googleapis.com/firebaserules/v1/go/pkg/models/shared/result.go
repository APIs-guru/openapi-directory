package shared

// Result
// Possible result values from the function mock invocation.
type Result struct {
	Undefined map[string]interface{} `json:"undefined,omitempty"`
	Value     *interface{}           `json:"value,omitempty"`
}
