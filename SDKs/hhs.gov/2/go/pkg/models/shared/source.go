package shared

type Source struct {
	Acronym      *string `json:"acronym,omitempty"`
	ContactEmail *string `json:"contactEmail,omitempty"`
	ID           *int64  `json:"id,omitempty"`
	LargeLogoURL *string `json:"largeLogoUrl,omitempty"`
	Name         *string `json:"name,omitempty"`
	SmallLogoURL *string `json:"smallLogoUrl,omitempty"`
	WebsiteURL   *string `json:"websiteUrl,omitempty"`
}
