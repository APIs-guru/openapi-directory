package shared

// GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse
// Response to list SfdcInstances.
type GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse struct {
	NextPageToken *string                                      `json:"nextPageToken,omitempty"`
	SfdcInstances []GoogleCloudIntegrationsV1alphaSfdcInstance `json:"sfdcInstances,omitempty"`
}
