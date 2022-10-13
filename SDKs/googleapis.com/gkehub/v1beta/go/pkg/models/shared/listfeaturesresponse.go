package shared

type ListFeaturesResponse struct {
	NextPageToken *string   `json:"nextPageToken"`
	Resources     []Feature `json:"resources"`
}
