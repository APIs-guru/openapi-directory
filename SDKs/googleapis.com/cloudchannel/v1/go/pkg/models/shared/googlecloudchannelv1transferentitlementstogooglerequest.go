package shared

// GoogleCloudChannelV1TransferEntitlementsToGoogleRequestInput
// Request message for CloudChannelService.TransferEntitlementsToGoogle.
type GoogleCloudChannelV1TransferEntitlementsToGoogleRequestInput struct {
	Entitlements []GoogleCloudChannelV1EntitlementInput `json:"entitlements,omitempty"`
	RequestID    *string                                `json:"requestId,omitempty"`
}
