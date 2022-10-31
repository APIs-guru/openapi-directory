package shared

type LandingPage struct {
	AdvertiserID *string    `json:"advertiserId,omitempty"`
	Archived     *bool      `json:"archived,omitempty"`
	DeepLinks    []DeepLink `json:"deepLinks,omitempty"`
	ID           *string    `json:"id,omitempty"`
	Kind         *string    `json:"kind,omitempty"`
	Name         *string    `json:"name,omitempty"`
	URL          *string    `json:"url,omitempty"`
}
