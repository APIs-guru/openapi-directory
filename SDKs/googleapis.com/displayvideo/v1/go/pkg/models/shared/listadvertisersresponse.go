package shared

type ListAdvertisersResponse struct {
	Advertisers   []Advertiser `json:"advertisers"`
	NextPageToken *string      `json:"nextPageToken"`
}
