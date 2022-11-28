package shared

// ListConnectionsResponse
// The response to a request for the authenticated user's connections.
type ListConnectionsResponse struct {
	Connections   []Person `json:"connections,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	NextSyncToken *string  `json:"nextSyncToken,omitempty"`
	TotalItems    *int32   `json:"totalItems,omitempty"`
	TotalPeople   *int32   `json:"totalPeople,omitempty"`
}
