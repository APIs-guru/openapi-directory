package shared

// ListSavedQueriesResponse
// Response of listing saved queries.
type ListSavedQueriesResponse struct {
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	SavedQueries  []SavedQuery `json:"savedQueries,omitempty"`
}
