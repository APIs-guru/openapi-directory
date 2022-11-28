package shared

// SystemParameter
// Define a parameter's name and location. The parameter may be passed as either an HTTP header or a URL query parameter, and if both are passed the behavior is implementation-dependent.
type SystemParameter struct {
	HTTPHeader        *string `json:"httpHeader,omitempty"`
	Name              *string `json:"name,omitempty"`
	URLQueryParameter *string `json:"urlQueryParameter,omitempty"`
}
