package shared

// ListSpacesResponse
// The response corresponding to ListSpacesRequest.
type ListSpacesResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Spaces        []Space `json:"spaces,omitempty"`
}
