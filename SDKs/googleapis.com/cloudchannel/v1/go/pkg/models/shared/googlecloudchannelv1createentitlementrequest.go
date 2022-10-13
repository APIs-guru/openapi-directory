package shared

type GoogleCloudChannelV1CreateEntitlementRequest struct {
	Entitlement *GoogleCloudChannelV1Entitlement `json:"entitlement"`
	RequestID   *string                          `json:"requestId"`
}
