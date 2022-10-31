package shared

type GoogleCloudIntegrationsV1alphaListSfdcChannelsResponse struct {
	NextPageToken *string                                     `json:"nextPageToken,omitempty"`
	SfdcChannels  []GoogleCloudIntegrationsV1alphaSfdcChannel `json:"sfdcChannels,omitempty"`
}
