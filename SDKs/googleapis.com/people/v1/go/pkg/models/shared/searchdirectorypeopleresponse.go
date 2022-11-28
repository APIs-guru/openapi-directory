package shared

// SearchDirectoryPeopleResponse
// The response to a request for people in the authenticated user's domain directory that match the specified query.
type SearchDirectoryPeopleResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	People        []Person `json:"people,omitempty"`
	TotalSize     *int32   `json:"totalSize,omitempty"`
}
