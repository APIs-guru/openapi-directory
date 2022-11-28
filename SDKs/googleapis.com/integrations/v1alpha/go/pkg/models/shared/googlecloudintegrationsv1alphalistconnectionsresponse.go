package shared

// GoogleCloudIntegrationsV1alphaListConnectionsResponse
// Response containing Connections listed by region.
type GoogleCloudIntegrationsV1alphaListConnectionsResponse struct {
	Connections   []GoogleCloudConnectorsV1Connection `json:"connections,omitempty"`
	NextPageToken *string                             `json:"nextPageToken,omitempty"`
}
