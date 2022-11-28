package shared

// GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse
// Response for listing RuntimeEntitySchemas for a specific Connection.
type GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse struct {
	NextPageToken        *string                                             `json:"nextPageToken,omitempty"`
	RuntimeEntitySchemas []GoogleCloudIntegrationsV1alphaRuntimeEntitySchema `json:"runtimeEntitySchemas,omitempty"`
}
