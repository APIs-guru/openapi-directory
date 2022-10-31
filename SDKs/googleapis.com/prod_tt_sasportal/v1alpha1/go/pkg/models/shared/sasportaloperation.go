package shared



type SasPortalOperation struct {
    Done *bool `json:"done,omitempty"`
    Error *SasPortalStatus `json:"error,omitempty"`
    Metadata map[string]interface{} `json:"metadata,omitempty"`
    Name *string `json:"name,omitempty"`
    Response map[string]interface{} `json:"response,omitempty"`
    
}

