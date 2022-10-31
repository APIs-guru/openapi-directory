package shared



type HTTPCacheControlResponseHeader struct {
    Age *string `json:"age,omitempty"`
    Directive *string `json:"directive,omitempty"`
    Expires *string `json:"expires,omitempty"`
    
}

