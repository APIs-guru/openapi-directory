package shared

type AdvertisersListResponse struct {
	Advertisers   []Advertiser `json:"advertisers"`
	Kind          *string      `json:"kind"`
	NextPageToken *string      `json:"nextPageToken"`
}
