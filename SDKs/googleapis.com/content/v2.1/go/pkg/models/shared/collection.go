package shared

// Collection
// The collection message.
type Collection struct {
	CustomLabel0    *string                     `json:"customLabel0,omitempty"`
	CustomLabel1    *string                     `json:"customLabel1,omitempty"`
	CustomLabel2    *string                     `json:"customLabel2,omitempty"`
	CustomLabel3    *string                     `json:"customLabel3,omitempty"`
	CustomLabel4    *string                     `json:"customLabel4,omitempty"`
	FeaturedProduct []CollectionFeaturedProduct `json:"featuredProduct,omitempty"`
	Headline        []string                    `json:"headline,omitempty"`
	ID              *string                     `json:"id,omitempty"`
	ImageLink       []string                    `json:"imageLink,omitempty"`
	Language        *string                     `json:"language,omitempty"`
	Link            *string                     `json:"link,omitempty"`
	MobileLink      *string                     `json:"mobileLink,omitempty"`
	ProductCountry  *string                     `json:"productCountry,omitempty"`
}
