package shared

type ListZonesResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Zone          []Zone  `json:"zone,omitempty"`
}
