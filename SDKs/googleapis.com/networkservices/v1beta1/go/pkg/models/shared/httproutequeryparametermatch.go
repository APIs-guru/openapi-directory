package shared

type HTTPRouteQueryParameterMatch struct {
	ExactMatch     *string `json:"exactMatch"`
	PresentMatch   *bool   `json:"presentMatch"`
	QueryParameter *string `json:"queryParameter"`
	RegexMatch     *string `json:"regexMatch"`
}
