package shared

type ListCreativesResponse struct {
	Creatives     []Creative `json:"creatives"`
	NextPageToken *string    `json:"nextPageToken"`
}
