package shared

// ContentCategoriesListResponse
// Content Category List Response
type ContentCategoriesListResponse struct {
	ContentCategories []ContentCategory `json:"contentCategories,omitempty"`
	Kind              *string           `json:"kind,omitempty"`
	NextPageToken     *string           `json:"nextPageToken,omitempty"`
}
