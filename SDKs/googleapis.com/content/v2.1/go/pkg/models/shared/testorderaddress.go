package shared

type TestOrderAddress struct {
	Country         *string  `json:"country"`
	FullAddress     []string `json:"fullAddress"`
	IsPostOfficeBox *bool    `json:"isPostOfficeBox"`
	Locality        *string  `json:"locality"`
	PostalCode      *string  `json:"postalCode"`
	RecipientName   *string  `json:"recipientName"`
	Region          *string  `json:"region"`
	StreetAddress   []string `json:"streetAddress"`
}
