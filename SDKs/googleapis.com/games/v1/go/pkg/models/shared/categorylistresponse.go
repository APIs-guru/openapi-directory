package shared

// CategoryListResponse
// A third party list metagame categories response.
type CategoryListResponse struct {
	Items         []Category `json:"items,omitempty"`
	Kind          *string    `json:"kind,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
