package shared



type HTTPRouteHeaderMatch struct {
    ExactMatch *string `json:"exactMatch,omitempty"`
    Header *string `json:"header,omitempty"`
    InvertMatch *bool `json:"invertMatch,omitempty"`
    PrefixMatch *string `json:"prefixMatch,omitempty"`
    PresentMatch *bool `json:"presentMatch,omitempty"`
    RangeMatch *HTTPRouteHeaderMatchIntegerRange `json:"rangeMatch,omitempty"`
    RegexMatch *string `json:"regexMatch,omitempty"`
    SuffixMatch *string `json:"suffixMatch,omitempty"`
    
}

