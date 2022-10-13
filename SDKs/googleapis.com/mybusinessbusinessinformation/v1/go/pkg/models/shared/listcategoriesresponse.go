package shared

type ListCategoriesResponse struct {
	Categories    []Category `json:"categories"`
	NextPageToken *string    `json:"nextPageToken"`
}
