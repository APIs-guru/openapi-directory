package shared

// CorsSettings
// Allows customers to configure HTTP request paths that'll allow HTTP OPTIONS call to bypass authentication and authorization.
type CorsSettings struct {
	AllowHTTPOptions *bool `json:"allowHttpOptions,omitempty"`
}
