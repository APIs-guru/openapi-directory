package shared

// SystemParameterRule
// Define a system parameter rule mapping system parameter definitions to methods.
type SystemParameterRule struct {
	Parameters []SystemParameter `json:"parameters,omitempty"`
	Selector   *string           `json:"selector,omitempty"`
}
