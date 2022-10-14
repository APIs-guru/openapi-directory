package shared

type ListDatabasesResponse struct {
	Databases     []Database `json:"databases,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
