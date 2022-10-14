package shared

type Location struct {
	Address           *PostalAddress `json:"address,omitempty"`
	Name              *string        `json:"name,omitempty"`
	PrimaryCategoryID *string        `json:"primaryCategoryId,omitempty"`
	PrimaryPhone      *string        `json:"primaryPhone,omitempty"`
	WebsiteURI        *string        `json:"websiteUri,omitempty"`
}
