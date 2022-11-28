package shared

// GoogleCloudChannelV1ListEntitlementsResponse
// Response message for CloudChannelService.ListEntitlements.
type GoogleCloudChannelV1ListEntitlementsResponse struct {
	Entitlements  []GoogleCloudChannelV1Entitlement `json:"entitlements,omitempty"`
	NextPageToken *string                           `json:"nextPageToken,omitempty"`
}
