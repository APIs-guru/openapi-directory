package shared



type RdapResponse struct {
    Description []string `json:"description,omitempty"`
    ErrorCode *int32 `json:"errorCode,omitempty"`
    JSONResponse *HTTPBody `json:"jsonResponse,omitempty"`
    Lang *string `json:"lang,omitempty"`
    Notices []Notice `json:"notices,omitempty"`
    RdapConformance []string `json:"rdapConformance,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

