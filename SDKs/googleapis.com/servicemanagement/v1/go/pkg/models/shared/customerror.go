package shared

// CustomError
// Customize service error responses. For example, list any service specific protobuf types that can appear in error detail lists of error responses. Example: custom_error: types: - google.foo.v1.CustomError - google.foo.v1.AnotherError
type CustomError struct {
	Rules []CustomErrorRule `json:"rules,omitempty"`
	Types []string          `json:"types,omitempty"`
}
