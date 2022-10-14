package shared

type ListSpacesResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Spaces        []Space `json:"spaces,omitempty"`
}
