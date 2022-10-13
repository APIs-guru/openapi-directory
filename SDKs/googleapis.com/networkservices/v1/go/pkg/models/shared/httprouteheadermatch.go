package shared

type HTTPRouteHeaderMatch struct {
	ExactMatch   *string                           `json:"exactMatch"`
	Header       *string                           `json:"header"`
	InvertMatch  *bool                             `json:"invertMatch"`
	PrefixMatch  *string                           `json:"prefixMatch"`
	PresentMatch *bool                             `json:"presentMatch"`
	RangeMatch   *HTTPRouteHeaderMatchIntegerRange `json:"rangeMatch"`
	RegexMatch   *string                           `json:"regexMatch"`
	SuffixMatch  *string                           `json:"suffixMatch"`
}
