package shared

type GoogleCloudChannelV1ListEntitlementsResponse struct {
	Entitlements  []GoogleCloudChannelV1Entitlement `json:"entitlements"`
	NextPageToken *string                           `json:"nextPageToken"`
}
