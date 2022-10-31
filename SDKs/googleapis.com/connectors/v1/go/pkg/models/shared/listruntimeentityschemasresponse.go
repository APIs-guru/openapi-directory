package shared

type ListRuntimeEntitySchemasResponse struct {
	NextPageToken        *string               `json:"nextPageToken,omitempty"`
	RuntimeEntitySchemas []RuntimeEntitySchema `json:"runtimeEntitySchemas,omitempty"`
}
