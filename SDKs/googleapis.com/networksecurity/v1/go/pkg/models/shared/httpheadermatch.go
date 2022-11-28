package shared

// HTTPHeaderMatch
// Specification of HTTP header match attributes.
type HTTPHeaderMatch struct {
	HeaderName *string `json:"headerName,omitempty"`
	RegexMatch *string `json:"regexMatch,omitempty"`
}
