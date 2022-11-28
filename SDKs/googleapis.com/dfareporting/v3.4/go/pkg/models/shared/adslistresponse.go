package shared

// AdsListResponse
// Ad List Response
type AdsListResponse struct {
	Ads           []Ad    `json:"ads,omitempty"`
	Kind          *string `json:"kind,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
