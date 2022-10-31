package shared



type HTTPHeaderMatch struct {
    HeaderName *string `json:"headerName,omitempty"`
    RegexMatch *string `json:"regexMatch,omitempty"`
    
}

