package shared

type CategoryListResponse struct {
	Items         []Category `json:"items"`
	Kind          *string    `json:"kind"`
	NextPageToken *string    `json:"nextPageToken"`
}
