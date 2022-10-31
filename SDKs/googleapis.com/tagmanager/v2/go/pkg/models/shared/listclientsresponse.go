package shared

type ListClientsResponse struct {
	Client        []Client `json:"client,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
