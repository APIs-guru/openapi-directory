package shared

type AdvertiserLandingPagesListResponse struct {
	Kind          *string       `json:"kind,omitempty"`
	LandingPages  []LandingPage `json:"landingPages,omitempty"`
	NextPageToken *string       `json:"nextPageToken,omitempty"`
}
