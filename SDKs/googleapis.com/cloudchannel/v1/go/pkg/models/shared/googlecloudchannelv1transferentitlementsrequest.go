package shared

type GoogleCloudChannelV1TransferEntitlementsRequest struct {
	AuthToken    *string                           `json:"authToken"`
	Entitlements []GoogleCloudChannelV1Entitlement `json:"entitlements"`
	RequestID    *string                           `json:"requestId"`
}
