package shared

type ListFeaturesResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Resources     []Feature `json:"resources,omitempty"`
}
