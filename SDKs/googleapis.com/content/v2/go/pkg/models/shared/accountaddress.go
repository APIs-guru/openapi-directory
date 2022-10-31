package shared

type AccountAddress struct {
	Country       *string `json:"country,omitempty"`
	Locality      *string `json:"locality,omitempty"`
	PostalCode    *string `json:"postalCode,omitempty"`
	Region        *string `json:"region,omitempty"`
	StreetAddress *string `json:"streetAddress,omitempty"`
}
