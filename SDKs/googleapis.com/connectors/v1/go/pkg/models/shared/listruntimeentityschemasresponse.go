package shared

// ListRuntimeEntitySchemasResponse
// Response message for ConnectorsService.ListRuntimeEntitySchemas.
type ListRuntimeEntitySchemasResponse struct {
	NextPageToken        *string               `json:"nextPageToken,omitempty"`
	RuntimeEntitySchemas []RuntimeEntitySchema `json:"runtimeEntitySchemas,omitempty"`
}
