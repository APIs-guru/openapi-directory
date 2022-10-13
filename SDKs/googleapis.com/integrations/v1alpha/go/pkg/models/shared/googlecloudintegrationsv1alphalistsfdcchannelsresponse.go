package shared

type GoogleCloudIntegrationsV1alphaListSfdcChannelsResponse struct {
	NextPageToken *string                                     `json:"nextPageToken"`
	SfdcChannels  []GoogleCloudIntegrationsV1alphaSfdcChannel `json:"sfdcChannels"`
}
