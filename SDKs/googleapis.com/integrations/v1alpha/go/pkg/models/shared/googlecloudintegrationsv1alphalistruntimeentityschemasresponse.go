package shared

type GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse struct {
	NextPageToken        *string                                             `json:"nextPageToken"`
	RuntimeEntitySchemas []GoogleCloudIntegrationsV1alphaRuntimeEntitySchema `json:"runtimeEntitySchemas"`
}
