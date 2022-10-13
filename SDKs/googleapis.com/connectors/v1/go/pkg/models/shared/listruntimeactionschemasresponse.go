package shared

type ListRuntimeActionSchemasResponse struct {
	NextPageToken        *string               `json:"nextPageToken"`
	RuntimeActionSchemas []RuntimeActionSchema `json:"runtimeActionSchemas"`
}
