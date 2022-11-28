package shared

// GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse
// Response for listing RuntimeActionSchemas for a specific Connection.
type GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse struct {
	NextPageToken        *string                                             `json:"nextPageToken,omitempty"`
	RuntimeActionSchemas []GoogleCloudIntegrationsV1alphaRuntimeActionSchema `json:"runtimeActionSchemas,omitempty"`
}
