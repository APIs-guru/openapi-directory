package shared

// ListDirectoryPeopleResponse
// The response to a request for the authenticated user's domain directory.
type ListDirectoryPeopleResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	NextSyncToken *string  `json:"nextSyncToken,omitempty"`
	People        []Person `json:"people,omitempty"`
}
