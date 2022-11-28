package shared

// ListCategoriesResponse
// Response message for BusinessCategories.ListCategories.
type ListCategoriesResponse struct {
	Categories    []Category `json:"categories,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
