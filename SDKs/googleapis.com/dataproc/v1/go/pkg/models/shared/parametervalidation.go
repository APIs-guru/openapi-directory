package shared

// ParameterValidation
// Configuration for parameter validation.
type ParameterValidation struct {
	Regex  *RegexValidation `json:"regex,omitempty"`
	Values *ValueValidation `json:"values,omitempty"`
}
