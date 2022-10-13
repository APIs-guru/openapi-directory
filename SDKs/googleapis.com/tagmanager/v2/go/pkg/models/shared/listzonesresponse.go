package shared

type ListZonesResponse struct {
	NextPageToken *string `json:"nextPageToken"`
	Zone          []Zone  `json:"zone"`
}
