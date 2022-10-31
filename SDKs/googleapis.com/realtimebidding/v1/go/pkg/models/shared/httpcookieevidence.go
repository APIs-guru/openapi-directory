package shared



type HTTPCookieEvidence struct {
    CookieNames []string `json:"cookieNames,omitempty"`
    MaxCookieCount *int32 `json:"maxCookieCount,omitempty"`
    
}

