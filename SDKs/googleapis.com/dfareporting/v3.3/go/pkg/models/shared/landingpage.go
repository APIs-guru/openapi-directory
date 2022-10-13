package shared

type LandingPage struct {
	AdvertiserID *string    `json:"advertiserId"`
	Archived     *bool      `json:"archived"`
	DeepLinks    []DeepLink `json:"deepLinks"`
	ID           *string    `json:"id"`
	Kind         *string    `json:"kind"`
	Name         *string    `json:"name"`
	URL          *string    `json:"url"`
}
