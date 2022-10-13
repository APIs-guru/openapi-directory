package shared

type Source struct {
	Acronym      *string `json:"acronym"`
	ContactEmail *string `json:"contactEmail"`
	ID           *int64  `json:"id"`
	LargeLogoURL *string `json:"largeLogoUrl"`
	Name         *string `json:"name"`
	SmallLogoURL *string `json:"smallLogoUrl"`
	WebsiteURL   *string `json:"websiteUrl"`
}
