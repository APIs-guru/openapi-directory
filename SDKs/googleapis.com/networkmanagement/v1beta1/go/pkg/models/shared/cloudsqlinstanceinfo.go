package shared



type CloudSQLInstanceInfo struct {
    DisplayName *string `json:"displayName,omitempty"`
    ExternalIP *string `json:"externalIp,omitempty"`
    InternalIP *string `json:"internalIp,omitempty"`
    NetworkURI *string `json:"networkUri,omitempty"`
    Region *string `json:"region,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

