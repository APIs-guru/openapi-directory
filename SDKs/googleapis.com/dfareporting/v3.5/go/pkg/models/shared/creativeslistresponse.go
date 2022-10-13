package shared

type CreativesListResponse struct {
	Creatives     []Creative `json:"creatives"`
	Kind          *string    `json:"kind"`
	NextPageToken *string    `json:"nextPageToken"`
}
