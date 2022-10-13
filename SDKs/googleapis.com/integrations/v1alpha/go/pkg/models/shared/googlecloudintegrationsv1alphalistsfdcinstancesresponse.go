package shared

type GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse struct {
	NextPageToken *string                                      `json:"nextPageToken"`
	SfdcInstances []GoogleCloudIntegrationsV1alphaSfdcInstance `json:"sfdcInstances"`
}
