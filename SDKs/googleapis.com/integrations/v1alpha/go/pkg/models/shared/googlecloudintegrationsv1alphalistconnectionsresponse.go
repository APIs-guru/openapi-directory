package shared

type GoogleCloudIntegrationsV1alphaListConnectionsResponse struct {
	Connections   []GoogleCloudConnectorsV1Connection `json:"connections"`
	NextPageToken *string                             `json:"nextPageToken"`
}
