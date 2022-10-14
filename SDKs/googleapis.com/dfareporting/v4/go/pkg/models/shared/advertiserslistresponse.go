package shared

type AdvertisersListResponse struct {
	Advertisers   []Advertiser `json:"advertisers,omitempty"`
	Kind          *string      `json:"kind,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
