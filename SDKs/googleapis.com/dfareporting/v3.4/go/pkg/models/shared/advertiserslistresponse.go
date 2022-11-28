package shared

// AdvertisersListResponse
// Advertiser List Response
type AdvertisersListResponse struct {
	Advertisers   []Advertiser `json:"advertisers,omitempty"`
	Kind          *string      `json:"kind,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
