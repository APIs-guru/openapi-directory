package shared



type GoogleCloudChannelV1TransferEntitlementsRequest struct {
    AuthToken *string `json:"authToken,omitempty"`
    Entitlements []GoogleCloudChannelV1Entitlement `json:"entitlements,omitempty"`
    RequestID *string `json:"requestId,omitempty"`
    
}

