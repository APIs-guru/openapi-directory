package shared

// HTTPRouteQueryParameterMatch
// Specifications to match a query parameter in the request.
type HTTPRouteQueryParameterMatch struct {
	ExactMatch     *string `json:"exactMatch,omitempty"`
	PresentMatch   *bool   `json:"presentMatch,omitempty"`
	QueryParameter *string `json:"queryParameter,omitempty"`
	RegexMatch     *string `json:"regexMatch,omitempty"`
}
