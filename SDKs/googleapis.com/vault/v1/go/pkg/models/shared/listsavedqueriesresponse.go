package shared

// ListSavedQueriesResponse
// Definition of the response for method ListSaveQuery.
type ListSavedQueriesResponse struct {
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	SavedQueries  []SavedQuery `json:"savedQueries,omitempty"`
}
