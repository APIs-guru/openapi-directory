package shared

type ListAdvertisersResponse struct {
	Advertisers   []Advertiser `json:"advertisers,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
