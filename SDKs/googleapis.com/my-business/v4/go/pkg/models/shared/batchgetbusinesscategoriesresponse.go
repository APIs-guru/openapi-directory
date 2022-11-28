package shared

// BatchGetBusinessCategoriesResponse
// Response message for BusinessCategories.BatchGetBusinessCategories.
type BatchGetBusinessCategoriesResponse struct {
	Categories []Category `json:"categories,omitempty"`
}
