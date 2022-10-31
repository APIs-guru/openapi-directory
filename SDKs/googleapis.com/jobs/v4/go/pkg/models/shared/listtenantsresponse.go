package shared



type ListTenantsResponse struct {
    Metadata *ResponseMetadata `json:"metadata,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Tenants []Tenant `json:"tenants,omitempty"`
    
}

