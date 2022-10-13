package shared

type ListHistoriesResponse struct {
	Histories     []History `json:"histories"`
	NextPageToken *string   `json:"nextPageToken"`
}
