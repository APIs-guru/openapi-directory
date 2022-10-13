package shared

type ReturnAddressAddress struct {
	Country       *string  `json:"country"`
	Locality      *string  `json:"locality"`
	PostalCode    *string  `json:"postalCode"`
	RecipientName *string  `json:"recipientName"`
	Region        *string  `json:"region"`
	StreetAddress []string `json:"streetAddress"`
}
