package shared

type GoogleCloudChannelV1CreateEntitlementRequest struct {
	Entitlement *GoogleCloudChannelV1Entitlement `json:"entitlement,omitempty"`
	RequestID   *string                          `json:"requestId,omitempty"`
}
