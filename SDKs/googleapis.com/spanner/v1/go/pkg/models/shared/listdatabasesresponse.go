package shared

type ListDatabasesResponse struct {
	Databases     []Database `json:"databases"`
	NextPageToken *string    `json:"nextPageToken"`
}
