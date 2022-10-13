package shared

type ContentCategoriesListResponse struct {
	ContentCategories []ContentCategory `json:"contentCategories"`
	Kind              *string           `json:"kind"`
	NextPageToken     *string           `json:"nextPageToken"`
}
