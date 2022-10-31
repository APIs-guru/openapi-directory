package shared



type CloudRunMetadata struct {
    Revision *string `json:"revision,omitempty"`
    Service *string `json:"service,omitempty"`
    ServiceUrls []string `json:"serviceUrls,omitempty"`
    
}

