package shared

// BatchGetCategoriesResponse
// Response message for BusinessCategories.BatchGetBusinessCategories.
type BatchGetCategoriesResponse struct {
	Categories []Category `json:"categories,omitempty"`
}
