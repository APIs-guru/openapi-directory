package shared



type GoogleCloudChannelV1ListEntitlementsResponse struct {
    Entitlements []GoogleCloudChannelV1Entitlement `json:"entitlements,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

