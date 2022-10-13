package shared

type ListRegionsResponse struct {
	NextPageToken *string  `json:"nextPageToken"`
	Regions       []Region `json:"regions"`
}
