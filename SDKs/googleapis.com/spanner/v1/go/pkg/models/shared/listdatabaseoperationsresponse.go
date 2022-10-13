package shared

type ListDatabaseOperationsResponse struct {
	NextPageToken *string     `json:"nextPageToken"`
	Operations    []Operation `json:"operations"`
}
