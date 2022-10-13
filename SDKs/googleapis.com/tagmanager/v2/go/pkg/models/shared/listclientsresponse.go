package shared

type ListClientsResponse struct {
	Client        []Client `json:"client"`
	NextPageToken *string  `json:"nextPageToken"`
}
