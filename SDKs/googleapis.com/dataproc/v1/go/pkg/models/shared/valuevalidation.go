package shared

// ValueValidation
// Validation based on a list of allowed values.
type ValueValidation struct {
	Values []string `json:"values,omitempty"`
}
