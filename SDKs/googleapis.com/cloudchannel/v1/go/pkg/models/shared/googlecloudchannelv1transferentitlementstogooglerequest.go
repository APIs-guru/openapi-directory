package shared

type GoogleCloudChannelV1TransferEntitlementsToGoogleRequest struct {
	Entitlements []GoogleCloudChannelV1Entitlement `json:"entitlements"`
	RequestID    *string                           `json:"requestId"`
}
