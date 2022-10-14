package shared

type ResourcesListResponse struct {
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	Resources     []Resource `json:"resources,omitempty"`
}
