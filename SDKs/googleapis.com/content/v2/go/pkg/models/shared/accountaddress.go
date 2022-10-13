package shared

type AccountAddress struct {
	Country       *string `json:"country"`
	Locality      *string `json:"locality"`
	PostalCode    *string `json:"postalCode"`
	Region        *string `json:"region"`
	StreetAddress *string `json:"streetAddress"`
}
