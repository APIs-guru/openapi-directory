package shared

type TestOrderAddress struct {
	Country         *string  `json:"country,omitempty"`
	FullAddress     []string `json:"fullAddress,omitempty"`
	IsPostOfficeBox *bool    `json:"isPostOfficeBox,omitempty"`
	Locality        *string  `json:"locality,omitempty"`
	PostalCode      *string  `json:"postalCode,omitempty"`
	RecipientName   *string  `json:"recipientName,omitempty"`
	Region          *string  `json:"region,omitempty"`
	StreetAddress   []string `json:"streetAddress,omitempty"`
}
