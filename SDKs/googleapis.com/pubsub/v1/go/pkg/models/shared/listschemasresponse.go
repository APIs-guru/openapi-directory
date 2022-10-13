package shared

type ListSchemasResponse struct {
	NextPageToken *string  `json:"nextPageToken"`
	Schemas       []Schema `json:"schemas"`
}
