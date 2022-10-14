package shared

type BatchGetCategoriesResponse struct {
	Categories []Category `json:"categories,omitempty"`
}
