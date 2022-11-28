package shared

// Location
// A subset of location info. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
type Location struct {
	Address           *PostalAddress `json:"address,omitempty"`
	Name              *string        `json:"name,omitempty"`
	PrimaryCategoryID *string        `json:"primaryCategoryId,omitempty"`
	PrimaryPhone      *string        `json:"primaryPhone,omitempty"`
	WebsiteURI        *string        `json:"websiteUri,omitempty"`
}
