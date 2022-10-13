package shared

type AdvertiserLandingPagesListResponse struct {
	Kind          *string       `json:"kind"`
	LandingPages  []LandingPage `json:"landingPages"`
	NextPageToken *string       `json:"nextPageToken"`
}
