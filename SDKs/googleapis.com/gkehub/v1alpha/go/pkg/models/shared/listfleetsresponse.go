package shared

type ListFleetsResponse struct {
	Fleets        []Fleet `json:"fleets"`
	NextPageToken *string `json:"nextPageToken"`
}
