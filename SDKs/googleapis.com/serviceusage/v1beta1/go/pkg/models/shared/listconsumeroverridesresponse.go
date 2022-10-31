package shared



type ListConsumerOverridesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Overrides []QuotaOverride `json:"overrides,omitempty"`
    
}

