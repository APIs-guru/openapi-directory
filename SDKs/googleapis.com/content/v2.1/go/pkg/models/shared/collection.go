package shared

type Collection struct {
	CustomLabel0    *string                     `json:"customLabel0"`
	CustomLabel1    *string                     `json:"customLabel1"`
	CustomLabel2    *string                     `json:"customLabel2"`
	CustomLabel3    *string                     `json:"customLabel3"`
	CustomLabel4    *string                     `json:"customLabel4"`
	FeaturedProduct []CollectionFeaturedProduct `json:"featuredProduct"`
	Headline        []string                    `json:"headline"`
	ID              *string                     `json:"id"`
	ImageLink       []string                    `json:"imageLink"`
	Language        *string                     `json:"language"`
	Link            *string                     `json:"link"`
	MobileLink      *string                     `json:"mobileLink"`
	ProductCountry  *string                     `json:"productCountry"`
}
