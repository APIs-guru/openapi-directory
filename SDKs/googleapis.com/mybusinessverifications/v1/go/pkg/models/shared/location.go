package shared

type Location struct {
	Address           *PostalAddress `json:"address"`
	Name              *string        `json:"name"`
	PrimaryCategoryID *string        `json:"primaryCategoryId"`
	PrimaryPhone      *string        `json:"primaryPhone"`
	WebsiteURI        *string        `json:"websiteUri"`
}
