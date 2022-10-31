package shared



type ListRuntimeActionSchemasResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    RuntimeActionSchemas []RuntimeActionSchema `json:"runtimeActionSchemas,omitempty"`
    
}

