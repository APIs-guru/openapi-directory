package shared

type ResourcesListResponse struct {
	NextPageToken *string    `json:"nextPageToken"`
	Resources     []Resource `json:"resources"`
}
