package shared

type ListSchemasResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Schemas       []Schema `json:"schemas,omitempty"`
}
