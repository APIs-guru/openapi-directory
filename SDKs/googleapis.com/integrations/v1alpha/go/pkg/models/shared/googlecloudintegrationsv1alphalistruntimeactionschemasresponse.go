package shared

type GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse struct {
	NextPageToken        *string                                             `json:"nextPageToken"`
	RuntimeActionSchemas []GoogleCloudIntegrationsV1alphaRuntimeActionSchema `json:"runtimeActionSchemas"`
}
