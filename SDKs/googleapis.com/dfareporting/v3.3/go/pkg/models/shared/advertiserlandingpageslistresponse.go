package shared

// AdvertiserLandingPagesListResponse
// Landing Page List Response
type AdvertiserLandingPagesListResponse struct {
	Kind          *string       `json:"kind,omitempty"`
	LandingPages  []LandingPage `json:"landingPages,omitempty"`
	NextPageToken *string       `json:"nextPageToken,omitempty"`
}
