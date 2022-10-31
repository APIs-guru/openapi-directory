package shared

type GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse struct {
	NextPageToken        *string                                             `json:"nextPageToken,omitempty"`
	RuntimeEntitySchemas []GoogleCloudIntegrationsV1alphaRuntimeEntitySchema `json:"runtimeEntitySchemas,omitempty"`
}
