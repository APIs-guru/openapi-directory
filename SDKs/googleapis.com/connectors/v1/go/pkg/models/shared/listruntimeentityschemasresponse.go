package shared

type ListRuntimeEntitySchemasResponse struct {
	NextPageToken        *string               `json:"nextPageToken"`
	RuntimeEntitySchemas []RuntimeEntitySchema `json:"runtimeEntitySchemas"`
}
