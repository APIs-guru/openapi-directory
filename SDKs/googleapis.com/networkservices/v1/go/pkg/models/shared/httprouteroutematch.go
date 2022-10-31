package shared



type HTTPRouteRouteMatch struct {
    FullPathMatch *string `json:"fullPathMatch,omitempty"`
    Headers []HTTPRouteHeaderMatch `json:"headers,omitempty"`
    IgnoreCase *bool `json:"ignoreCase,omitempty"`
    PrefixMatch *string `json:"prefixMatch,omitempty"`
    QueryParameters []HTTPRouteQueryParameterMatch `json:"queryParameters,omitempty"`
    RegexMatch *string `json:"regexMatch,omitempty"`
    
}

