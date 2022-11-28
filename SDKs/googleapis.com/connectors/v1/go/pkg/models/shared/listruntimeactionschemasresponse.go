package shared

// ListRuntimeActionSchemasResponse
// Response message for ConnectorsService.ListRuntimeActionSchemas.
type ListRuntimeActionSchemasResponse struct {
	NextPageToken        *string               `json:"nextPageToken,omitempty"`
	RuntimeActionSchemas []RuntimeActionSchema `json:"runtimeActionSchemas,omitempty"`
}
