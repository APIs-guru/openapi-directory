package shared

// GoogleCloudChannelV1TransferEntitlementsRequestInput
// Request message for CloudChannelService.TransferEntitlements.
type GoogleCloudChannelV1TransferEntitlementsRequestInput struct {
	AuthToken    *string                                `json:"authToken,omitempty"`
	Entitlements []GoogleCloudChannelV1EntitlementInput `json:"entitlements,omitempty"`
	RequestID    *string                                `json:"requestId,omitempty"`
}
