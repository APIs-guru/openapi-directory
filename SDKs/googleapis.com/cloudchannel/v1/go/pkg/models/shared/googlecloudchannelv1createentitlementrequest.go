package shared

// GoogleCloudChannelV1CreateEntitlementRequestInput
// Request message for CloudChannelService.CreateEntitlement
type GoogleCloudChannelV1CreateEntitlementRequestInput struct {
	Entitlement *GoogleCloudChannelV1EntitlementInput `json:"entitlement,omitempty"`
	RequestID   *string                               `json:"requestId,omitempty"`
}
