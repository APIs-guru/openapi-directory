package shared

// HTTPRouteRouteMatch
// RouteMatch defines specifications used to match requests. If multiple match types are set, this RouteMatch will match if ALL type of matches are matched.
type HTTPRouteRouteMatch struct {
	FullPathMatch   *string                        `json:"fullPathMatch,omitempty"`
	Headers         []HTTPRouteHeaderMatch         `json:"headers,omitempty"`
	IgnoreCase      *bool                          `json:"ignoreCase,omitempty"`
	PrefixMatch     *string                        `json:"prefixMatch,omitempty"`
	QueryParameters []HTTPRouteQueryParameterMatch `json:"queryParameters,omitempty"`
	RegexMatch      *string                        `json:"regexMatch,omitempty"`
}
