package shared

type ListSavedQueriesResponse struct {
	NextPageToken *string      `json:"nextPageToken"`
	SavedQueries  []SavedQuery `json:"savedQueries"`
}
