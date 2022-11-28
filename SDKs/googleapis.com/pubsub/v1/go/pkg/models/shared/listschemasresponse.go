package shared

// ListSchemasResponse
// Response for the `ListSchemas` method.
type ListSchemasResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Schemas       []Schema `json:"schemas,omitempty"`
}
