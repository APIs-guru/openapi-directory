package shared

type HTTPRouteRouteMatch struct {
	FullPathMatch   *string                        `json:"fullPathMatch"`
	Headers         []HTTPRouteHeaderMatch         `json:"headers"`
	IgnoreCase      *bool                          `json:"ignoreCase"`
	PrefixMatch     *string                        `json:"prefixMatch"`
	QueryParameters []HTTPRouteQueryParameterMatch `json:"queryParameters"`
	RegexMatch      *string                        `json:"regexMatch"`
}
